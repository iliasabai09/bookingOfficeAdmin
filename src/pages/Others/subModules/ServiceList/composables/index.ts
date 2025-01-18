import {onMounted, ref} from "vue";
import ServiceListService from '../services/index.ts'
import {type DataTableRowEditSaveEvent, useConfirm, useDialog} from "primevue";
import CityListService from "../../CItyList/services";
import type {DynamicDialogCloseOptions} from "primevue/dynamicdialogoptions";
import {CONFIRM_MODAL_PROPS} from "../../../../../shared/constants/componentProps.ts";
import CreateServiceModal from "../components/CreateServiceModal.vue";

export function useServiceList() {
    const serviceList = ref<any[]>([])
    const dialog = useDialog();
    const editingRows = ref([]);
    const confirm = useConfirm();
    const statuses = [
        {label: 'Активный', value: true},
        {label: 'Неактивный', value: false},
    ];

    function _getServiceList() {
        ServiceListService.getServiceList().then(services => {
            serviceList.value = services;
        })
    }

    function onRowEditSave(event: DataTableRowEditSaveEvent) {
        let {newData, index} = event;
        ServiceListService.editCity(newData).then((res: any) => {
            serviceList.value[index] = res;
        })
    }

    function createService() {
        dialog.open(CreateServiceModal, {
            props: {
                modal: true,
                header: 'Добавить сервис',
                draggable: false,
            },
            onClose: (options: DynamicDialogCloseOptions) => {
                if (options.data) {
                    serviceList.value.push(options.data)
                }
            }
        })
    }

    function deleteService(id: number) {
        confirm.require({
            message: 'Вы уверены что хотите удалить сервис?',
            header: 'Удалить сервис?',
            ...CONFIRM_MODAL_PROPS,
            accept: () => {
                CityListService.deleteCity(id).then(() => {
                    serviceList.value = serviceList.value.filter(service => service.id !== id)
                })
            },
        });
    }

    onMounted(() => {
        _getServiceList()
    })
    return {
        serviceList,
        onRowEditSave,
        createService,
        statuses,
        deleteService,
        editingRows,
    }
}
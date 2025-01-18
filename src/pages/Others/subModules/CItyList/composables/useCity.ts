import {onMounted, ref} from "vue";
import CityListService from '../services/index.ts'
import {type DataTableRowEditSaveEvent, useConfirm, useDialog} from "primevue";
import CreateCityModal from "../components/CreateCityModal.vue";
import {CONFIRM_MODAL_PROPS} from "../../../../../shared/constants/componentProps.ts";
import type {DynamicDialogCloseOptions} from "primevue/dynamicdialogoptions";

export function useCity() {
    const dialog = useDialog();
    const cityList = ref<any[]>([])
    const editingRows = ref([]);
    const confirm = useConfirm();
    const statuses = [
        {label: 'Активный', value: true},
        {label: 'Неактивный', value: false},
    ];

    function _fetchCityList() {
        CityListService.getCityList().then((list: any) => {
            cityList.value = list;
        })
    }

    function onRowEditSave(event: DataTableRowEditSaveEvent) {
        let {newData, index} = event;
        CityListService.editCity(newData).then((res: any) => {
            cityList.value[index] = res;
        })
    }

    function createCIty() {
        dialog.open(CreateCityModal, {
            props: {
                modal: true,
                header: 'Добавить город',
                draggable: false,
            },
            onClose: (options: DynamicDialogCloseOptions) => {
                if (options.data) {
                    cityList.value.push(options.data)
                }
            }
        })
    }

    function deleteProduct(id: number) {
        confirm.require({
            message: 'Вы уверены что хотите удалить город?',
            header: 'Удалить город?',
            ...CONFIRM_MODAL_PROPS,
            accept: () => {
                CityListService.deleteCity(id).then(() => {
                    cityList.value = cityList.value.filter(city => city.id !== id)
                })
            },
        });
    }

    onMounted(() => {
        _fetchCityList()
    })

    return {
        cityList,
        editingRows,
        statuses,
        onRowEditSave,
        createCIty,
        deleteProduct,
    }
}
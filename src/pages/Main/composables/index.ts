import {onMounted, ref} from "vue";
import PartnersService from '../services/index.ts';
import {type DataTableRowEditSaveEvent, type DataTableRowExpandEvent, useConfirm, useDialog} from "primevue";
import {CONFIRM_MODAL_PROPS} from "../../../shared/constants/componentProps.ts";
import type {DynamicDialogCloseOptions} from "primevue/dynamicdialogoptions";
import SetPartner from "../components/SetPartner.vue";

export function usePartners() {
    const partners = ref<any[]>([])
    const editingRows = ref([]);
    const expandedRows = ref([]);
    const confirm = useConfirm();
    const dialog = useDialog();

    function _getPartners() {
        PartnersService.getPartnerList().then(res => {
            partners.value = res;
        })
    }

    function onRowEditSave(event: DataTableRowEditSaveEvent) {
        let {newData, index} = event;
        PartnersService.editPartner(newData).then((res: any) => {
            partners.value[index] = res;
        })
    }

    function deletePartner(id: number) {
        confirm.require({
            message: 'Вы уверены что хотите удалить партнера?',
            header: 'Удалить партнера?',
            ...CONFIRM_MODAL_PROPS,
            accept: () => {
                PartnersService.deletePartner(id).then(() => {
                    partners.value = partners.value.filter(partner => partner.id !== id)
                })
            },
        });
    }

    function createPartner(partner?: any) {
        dialog.open(SetPartner, {
            props: {
                modal: true,
                header: 'Добавить партнера',
                draggable: false,
            },
            data: {
                partner
            },
            onClose: (options: DynamicDialogCloseOptions) => {
                if (!options.data) return;
                if (!partner) {
                    partners.value.push(options.data)
                } else {
                    console.log(partner)
                    console.log(partners.value)
                    console.log(options.data)
                    partners.value = partners.value.map(par => {
                        if (par.id === options.data.id) return options.data
                        else return par
                    })
                }
            }
        })
    }

    function getPartnerAreas(ev: DataTableRowExpandEvent) {
        const {data} = ev;
        if (data.areas.length) return;
        PartnersService.getPartnerAreaList(data.id).then(res => {
            partners.value.find(r => r.id === data.id).areas = res || []
        })
    }

    onMounted(() => {
        _getPartners()
    })
    return {
        partners,
        editingRows,
        expandedRows,
        onRowEditSave,
        deletePartner,
        createPartner,
        getPartnerAreas,
    }
}
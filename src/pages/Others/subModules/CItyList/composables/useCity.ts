import {onMounted, ref} from "vue";
import CityListService from '../services/index.ts'
import {type DataTableRowEditSaveEvent, type DataTableRowExpandEvent, useConfirm, useDialog} from "primevue";
import CreateCityModal from "../components/CreateCityModal.vue";
import {CONFIRM_MODAL_PROPS} from "../../../../../shared/constants/componentProps.ts";
import type {DynamicDialogCloseOptions} from "primevue/dynamicdialogoptions";
import {useRegion} from "./useRegion.ts";
import SetRegionModal from "../components/SetRegionModal.vue";

export function useCity() {
    const dialog = useDialog();
    const cityList = ref<any[]>([])
    const editingRows = ref([]);
    const confirm = useConfirm();
    const statuses = [
        {label: 'Активный', value: true},
        {label: 'Неактивный', value: false},
    ];
    const {getCItyRegionsByCode, deleteRegion} = useRegion();

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

    function addRegion(cityId: number, region?: any) {
        dialog.open(SetRegionModal, {
            props: {
                modal: true,
                header: region ? 'Изменить регион' : 'Добавить регион',
                draggable: false,
            },
            data: {region, cityId},
            onClose: (options: DynamicDialogCloseOptions) => {
                if (options.data && !region) {
                    cityList.value.find(city => city.id === cityId).regions.push(options.data);
                } else {
                    const curCity = cityList.value.find(city => city.id === cityId);
                    curCity.regions = curCity.regions.map((r: any) => {
                        if (r.id === region.id) return region;
                        else return r;
                    });
                }
            }
        })
    }

    function getCityRegions(ev: DataTableRowExpandEvent) {
        const {data} = ev;
        if (data.regions.length) return;
        getCItyRegionsByCode(data.code).then((res: any) => {
            // todo работа со ссылкой слабое звено
            data.regions = res;
        })
    }

    function removeRegion(cityId: number, regionId: number) {
        confirm.require({
            message: 'Вы уверены что хотите удалить регион?',
            header: 'Удалить регион?',
            ...CONFIRM_MODAL_PROPS,
            accept: () => {
                deleteRegion(regionId).then(() => {
                    const curRegion = cityList.value.find(city => city.id === cityId);
                    curRegion.regions = curRegion.regions.filter((region: any) => region.id !== regionId)
                })
            },
        });
    }

    onMounted(async () => {
        _fetchCityList()
    })

    return {
        cityList,
        editingRows,
        statuses,
        onRowEditSave,
        createCIty,
        deleteProduct,
        addRegion,
        getCityRegions,
        removeRegion,
    }
}
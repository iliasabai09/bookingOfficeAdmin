import {onMounted, ref} from "vue";
import CityListService from '../services/index.ts'
import {type DataTableRowEditSaveEvent, useDialog} from "primevue";
import CreateCityModal from "../components/CreateCityModal.vue";

export function useCity() {
    const dialog = useDialog();
    const cityList = ref<any[]>([])
    const editingRows = ref([]);
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
            onClose: (options) => {
                if (options.data) {
                    cityList.value.push(options.data)
                }
            }
        })
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
    }
}
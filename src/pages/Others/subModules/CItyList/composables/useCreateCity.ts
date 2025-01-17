import {inject, ref} from "vue";
import CityListService from '../services/index.ts'

export function useCreateCity() {
    const loading = ref(false);
    const dialogRef = inject('dialogRef');

    const form = ref({
        code: "",
        name: "",
        status: "active",
        isActive: true
    })

    function createCity() {
        loading.value = true;
        CityListService.createCity(form.value).then(res => {
            dialogRef.value.close(res);
        })
    }

    return {
        form,
        createCity
    }
}
import {inject, ref} from "vue";
import ServiceListService from '../services/index.ts'

export function useCreateService() {
    const loading = ref(false);
    const dialogRef = inject<any>('dialogRef');

    const form = ref({
        code: "",
        name: "",
        status: "active",
        isActive: true,
        description: '',
    })

    function createService() {
        loading.value = true;
        ServiceListService.addService(form.value).then(res => {
            dialogRef.value.close(res);
        })
    }

    return {
        form,
        createService
    }
}
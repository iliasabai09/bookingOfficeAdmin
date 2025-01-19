import {inject, onMounted, ref} from "vue";
import RegionsService from "../services/regions.service.ts";

export function useCreateRegion() {
    const dialogRef = inject<any>('dialogRef');
    const isSave = ref(true);
    const form = ref<any>({
        id: 0,
        code: "",
        name: "",
        status: "active",
        isActive: true,
        cityId: 0
    })

    function setRegion() {
        if (isSave.value) {
            RegionsService.addRegion(form.value).then((res: any) => {
                dialogRef.value.close(res);
            });
        } else {
            RegionsService.updateRegion(form.value).then((res: any) => {
                dialogRef.value.close(res);
            });
        }
    }

    onMounted(() => {
        const region = dialogRef.value?.data?.region;
        form.value.cityId = dialogRef.value?.data?.cityId || 0;
        if (region) {
            isSave.value = false;
            for (const k in form.value) {
                form.value[k] = region[k];
            }
        }
    })

    return {
        form,
        isSave,
        setRegion,
    }
}
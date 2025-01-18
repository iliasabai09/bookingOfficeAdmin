import {computed, inject, onMounted, ref} from "vue";
import PartnerService from "../services/index.ts";

export function useSetPartner() {
    const dialogRef = inject<any>('dialogRef');
    const loading = ref(false);
    const isSave = ref(true);
    const form = ref<any>({
        id: 0,
        organizationName: "",
        organizationBin: "",
        factAddress: "",
        jurAddress: "",
        brandName: "",
        brandLogo: "",
        firstContact: "",
        secondContact: "",
        generalOpeningHours: "",
        holidayOpeningHours: "",
        whatsapp: "",
        telegram: "",
        instagram: "",
        facebook: "",
        youtube: "",
        email: "",
    })

    function createPartner() {
        loading.value = true;
        if (isSave.value) {
            PartnerService.addPartner(form.value).then(res => {
                dialogRef.value.close(res);
            })
        } else {
            PartnerService.editPartner(form.value).then(res => {
                dialogRef.value.close(res);
            })
        }
    }

    const validForm = computed(() => {
        const {
            organizationName,
            organizationBin,
            factAddress,
            firstContact,
            email
        } = form.value;
        return !(
            organizationName &&
            factAddress &&
            organizationBin &&
            firstContact &&
            email
        );
    })

    onMounted(() => {
        const partner = dialogRef.value.data.partner;
        if (partner) {
            isSave.value = false;
            for (const k in form.value) {
                form.value[k] = partner[k];
            }
        }
        console.log(dialogRef.value.data.partner)
    })

    return {
        form,
        loading,
        isSave,
        validForm,
        createPartner
    }
}
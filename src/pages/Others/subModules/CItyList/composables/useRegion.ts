import {ref} from "vue";
import RegionsService from "../services/regions.service.ts";

export function useRegion() {
    const regions = ref<any[]>([])

    async function getRegionList() {
        RegionsService.getRegionsList().then((res: any) => {
            regions.value = res;
            Promise.resolve();
        })
    }

    function getCItyRegionsByCode(code: string) {
        return RegionsService.getRegionsListByCode(code)
    }

    function deleteRegion(id: number) {
        return RegionsService.removeRegion(id).then((res: any) => res.data)
    }

    return {
        regions,
        getRegionList,
        getCItyRegionsByCode,
        deleteRegion,
    }
}
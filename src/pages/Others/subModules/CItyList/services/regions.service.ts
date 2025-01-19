import {deleteRegion, getRegionsByCode, getRegionsList, setRegion, updateRegion} from "../api";

class RegionsService {
    getRegionsList() {
        return getRegionsList().then((res: any) => res.data);
    }

    getRegionsListByCode(cityCode: string) {
        return getRegionsByCode(cityCode).then((res: any) => res.data);
    }

    addRegion(data: any) {
        return setRegion(data).then((res: any) => res.data);
    }

    removeRegion(id: number) {
        return deleteRegion(id).then((res: any) => res.data);
    }

    updateRegion(data: any) {
        return updateRegion(data).then((res: any) => res.data);
    }
}

export default new RegionsService();
import {addPartner, deletePartner, editPartner, getPartnerAreas, getPartnerList} from "../api";

class PartnersService {
    getPartnerList() {
        return getPartnerList().then((res) => res.data.map((p: any) => {
            return {
                ...p,
                areas: []
            }
        }))
    }

    addPartner(data: any) {
        return addPartner(data).then(res => res.data)
    }

    editPartner(data: any) {
        return editPartner(data).then(res => res.data)
    }

    deletePartner(id: number) {
        return deletePartner(id).then(res => res.data)
    }

    getPartnerAreaList(partnerId: number) {
        return getPartnerAreas(partnerId).then((res) => res.data)
    }
}

export default new PartnersService();
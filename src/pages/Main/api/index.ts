import {apiOffices} from "../../../shared/api/offices-api.ts";

export function getPartnerList() {
    return apiOffices.get("/partners")
}

export function editPartner(data: any) {
    return apiOffices.put("/partners/" + data.id, data)
}

export function deletePartner(id: number) {
    return apiOffices.delete('/partners/' + id)
}

export function addPartner(data: any) {
    return apiOffices.post('/partners', data)
}

export function getPartnerAreas(partnerId: number) {
    return apiOffices.get(`/partner-areas/partner/${partnerId}?partnerId=${partnerId}`)
}
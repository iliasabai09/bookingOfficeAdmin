import {apiOffices} from "../../../../../shared/api/offices-api.ts";

export function getServiceList() {
    return apiOffices.get('/services')
}

export function editService(data: any) {
    return apiOffices.put('/services/' + data.id, data)
}

export function addService(data: any) {
    return apiOffices.post('/services', data)
}

export function deleteService(id: number) {
    return apiOffices.delete('/services/' + id)
}
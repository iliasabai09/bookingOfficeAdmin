import {apiOffices} from "../../../../../shared/api/offices-api.ts";

export function getCities() {
    return apiOffices.get('/cities');
}

export function editCity(data: any) {
    return apiOffices.put('/cities/' + data.id, data);
}

export function createCity(data: any) {
    return apiOffices.post('/cities', data);
}

export function deleteCity(id: number) {
    return apiOffices.delete('/cities/' + id);
}
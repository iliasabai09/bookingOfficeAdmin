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

export function getRegionsList() {
    return apiOffices.get('/regions');
}

export function updateRegion(data: any) {
    return apiOffices.put('/regions/' + data.id, data);
}

export function deleteRegion(id: number) {
    return apiOffices.delete('/regions/' + id);
}

export function setRegion(data: any) {
    return apiOffices.post('/regions', data);
}

export function getRegionsByCode(code: string) {
    return apiOffices.get('/regions/city/' + code);
}
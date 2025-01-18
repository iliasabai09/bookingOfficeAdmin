import {createCity, deleteCity, editCity, getCities} from "../api";

class CityListService {
    getCityList() {
        return getCities().then((res: any) => res.data.map((city: any, idx: number) => {
            return {
                ...city,
                number: ++idx
            };
        }));
    }

    editCity(data: any) {
        return editCity(data).then((res: any) => res.data);
    }

    createCity(data: any) {
        return createCity(data).then((res: any) => res.data);
    }

    deleteCity(id: number) {
        return deleteCity(id).then((res: any) => res.data)
    }
}

export default new CityListService;
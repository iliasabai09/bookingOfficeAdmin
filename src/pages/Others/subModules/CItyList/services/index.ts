import {createCity, editCity, getCities} from "../api";

class CityListService {
    getCityList() {
        return getCities().then((res: any) => res.data);
    }

    editCity(data: any) {
        return editCity(data).then((res: any) => res.data);
    }

    createCity(data: any) {
        return createCity(data).then((res: any) => res.data);
    }
}

export default new CityListService;
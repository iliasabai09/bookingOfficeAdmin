import {addService, deleteService, editService, getServiceList} from "../api";

class ServiceListService {
    getServiceList() {
        return getServiceList().then(res => res.data)
    }

    editCity(data: any) {
        return editService(data).then(res => res.data)
    }

    addService(data: any) {
        return addService(data).then(res => res.data)
    }

    deleteService(id: number) {
        return deleteService(id).then(res => res.data)
    }
}

export default new ServiceListService;
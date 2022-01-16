import axiosService from "./axios.service"
import { url } from "./urls"


function ApiCar() {

    this.createApiCar = (car) => {
        return axiosService.post(url.cars , car).then((response) => response);
    }

    this.getApiCars = () => {
        return axiosService.get(url.cars).then((cars) => cars.data);
    }

    this.updateApiCar = ({id, year, model, price}) => {
        return axiosService.patch(`${url.cars}/${id}`, {price, model, year}).then((cars) => cars);
    }

    this.deleteApiCar = (id) => {
        return axiosService.delete(`${url.cars}/${id}`).then((car) => car);
    }


};
const apiIntance = new ApiCar();

export default apiIntance;
import axiosService from "./axios.service"
import { urlFetch } from "./urls"



function ApiUsers() {

    this.fetchUsers = () => {
        return axiosService.get(urlFetch.usersApi).then((users) => users.data);
    }

    this.fetchUser = (id) => {
        return axiosService.get(`${urlFetch.usersApi}/${id}`).then((user) => user.data);
    }

    this.fetchUserPosts = (id) => {
        return axiosService.get(`${urlFetch.usersApi}/${id}/posts`).then((user) => user.data);
    }

    // this.getApiCars = () => {
    //     return axiosService.get(url.cars).then((cars) => cars.data);
    // }

    // this.updateApiCar = ({id, year, model, price}) => {
    //     return axiosService.patch(`${url.cars}/${id}`, {price, model, year}).then((cars) => cars);
    // }

    // this.deleteApiCar = (id) => {
    //     return axiosService.delete(`${url.cars}/${id}`).then((car) => car);
    // }


};
const apiIntance = new ApiUsers();

export default apiIntance;
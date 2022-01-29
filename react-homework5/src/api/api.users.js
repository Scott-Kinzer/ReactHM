import {axiosServiceUsers} from "./axios.service";



function ApiUsers() {
    this.usersFetch = () => {
        return axiosServiceUsers.get().then((response) => response.data);
    }
};



const apiIntance = new ApiUsers();

export default apiIntance;
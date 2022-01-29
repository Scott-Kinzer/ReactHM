import {axiosServiceUsers} from "./axios.service";



function ApiUsers() {
    this.usersFetch = () => {
        return axiosServiceUsers.get('users').then((response) => response.data);
    }

    this.postsFetch = (id) => {
        return axiosServiceUsers.get(`users/${id}/posts`).then((response) => response.data);
    }

    this.fetchComments = (id) => {
    
        return axiosServiceUsers.get(`/posts/${id}/comments`).then((user) => user.data);
    }
};



const apiIntance = new ApiUsers();

export default apiIntance;
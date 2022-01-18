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

    // https://jsonplaceholder.typicode.com/posts/22

    this.fetchUniquePost = (id) => {
        return axiosService.get(`/posts/${id}`).then((user) => user.data);
    }

};
const apiIntance = new ApiUsers();

export default apiIntance;
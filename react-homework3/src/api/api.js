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


    this.fetchUniquePost = (id) => {
        return axiosService.get(`/posts/${id}`).then((user) => user.data);
    }

    this.fetchComments = (id) => {
        return axiosService.get(`/posts/${id}/comments`).then((user) => user.data);
    }

    this.fetchAlbums = (id) => {
        return axiosService.get(`${urlFetch.usersApi}/${id}/albums`).then((albums) => albums.data);
    }

    this.fetchPhotosOfAlbums = (idAlbum) => {
        return axiosService.get(`albums/${idAlbum}/photos`).then((photos) => photos.data);
    }

};
const apiIntance = new ApiUsers();

export default apiIntance;
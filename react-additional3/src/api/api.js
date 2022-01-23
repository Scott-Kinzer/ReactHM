import axiosService from "./axios.service"


function ApiCartoon() {

    this.getEpisodes = () => {
        return axiosService.get('/episode').then((response) => response.data);
    }

    this.getEpisodesPage = (idPage) => {
        return axiosService.get(`/episode?page=${idPage}`).then((response) => response.data);
    }

};
const apiIntance = new ApiCartoon();

export default apiIntance;
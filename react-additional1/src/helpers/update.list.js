import apiIntance from "../api/api";

export const UpdateList = (setCars) => {
    apiIntance.getApiCars().then(setCars);
}
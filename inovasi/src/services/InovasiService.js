import axios from "axios";

const REST_API_BASE_URL = "https://api.roniprsty.com/kuis/read.php/";

export const listInovasi = () => axios.get(REST_API_BASE_URL + "read.php");
export const addInovasi = (newInovasi) => {
    return axios.post(REST_API_BASE_URL + "create.php", newInovasi);
};

export const deleteInovasi = (idInovasi) => {
    return axios.delete(`${REST_API_BASE_URL}delete.php?id=${idInovasi}`);
};

export const getInovasiById = (idInovasi) => {
    return axios.delete(`${REST_API_BASE_URL}detail.php?id=${idInovasi}`);
};

export const updateInovasi = (newInovasi) => {
    return axios.put(REST_API_BASE_URL + "update.php", newInovasi);
};
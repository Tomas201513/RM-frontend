import axios from "axios";
import { TokenJson } from "./token/AuthToken";
import axiosInstance from "src/utils/useAxiosInterceptors";

const api = `https://rm-backend-reop.onrender.com/api/country/`;

export const GetCountry = async () => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.get(api, TokenJson());
        console.log ('ddddppppppttt',res.data);
    return res.data;
    } else {
        // console.log("No token");
    }
    }

export const GetCountryDetail = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.get(`${api}${id}/`, TokenJson());
        console.log('==========>',res)
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const CreateCountry = async (values) => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.post(api, values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const UpdateCountry = async (values) => {
    if (localStorage.getItem("accessToken") && values) {
        const res = await axiosInstance.put(`${api}${values.selectedData}/`, values.values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const DeleteCountry = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.delete(`${api}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

    
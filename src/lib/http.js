import axios from "axios";
import { configs } from "../configs/const";
import { getAccessToken } from "../utils/auth";
export const publicClient = axios.create({
    baseURL: configs.apiBaseUrl,
});

export const protectedClient = axios.create({
    baseURL: configs.apiBaseUrl,
});

protectedClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers["Authorization"] = "Bearer " + getAccessToken();
    return config;
});

export const handleHttpError = (e)=> {
    if(axios.isAxiosError(e)) {
        return {
            data:null, 
            error: e?.response?.data?.message
        }
       } else {
          return {
            data:null, 
            error: "something went't wrong"
        }
       }
}



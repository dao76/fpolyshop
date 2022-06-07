import axiosInstance from "../../utils/axios";
import constants from "../../utils/contants";

export const login = async (username, password) => {
    const data = { username, password}
    const res = await axiosInstance.post(constants.API_LOGIN, data);
    return res;
}

export const register = async (username, password,comfirm_password) => {
    const data = { username, password, comfirm_password}
    const res = await axiosInstance.post(constants.API_REGISTER, data);
    return res;
}
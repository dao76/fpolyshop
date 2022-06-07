import axiosInstance from '../../utils/axios'
import contants from '../../utils/contants';
export const getproductsss = async () => {
    const res = await axiosInstance.get(contants.API_PRODUCTS);
    return res;
}
export const getcart = async () => {
    const res = await axiosInstance.get(contants.API_CART_LIST);
    return res;
}

export const getProductDetail = async (id) => {
    const res = await axiosInstance.get(`${contants.API_PRODUCTS_BY_ID}:${id}/detail`)
    return res ;
}

export const cartadd = async (data) => {
    console.log('data: ' + data);
    const res = await axiosInstance.post(contants.API_ADD_CART, data);
    console.log('res: ' + res);
    return res;
}



import axios from 'axios';

const API = 'https://aerolab-challenge.now.sh';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`; 

export const getProducts = async () => await axios.get(`${API}/products`);

export const getUser = async () => {
    const [resultUser, resultHistory] = await Promise.all([axios.get(`${API}/user/me`), getUserHistory()]);
    const user = resultUser.data;
    return Object.assign({}, user, { redeemHistory: resultHistory.data});
}

export const getUserHistory = async () => await axios.get(`${API}/user/history`);

export const reedemProduct = async (productId) => await axios.post(`${API}/redeem`, {
    productId
});
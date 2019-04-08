import axios from 'axios';



const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E3Y2QzY2U3MDdjMzAwNmRmNTM4MWMiLCJpYXQiOjE1NTQ1MDA5MjR9.Pcuy5KrITnw6HyMxFiXs9OAt5qJNxAyCHM8UZtnIxwU';
const API = 'https://aerolab-challenge.now.sh';
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`; 



export const getProducts = async () => await axios.get(`${API}/products`);




export const getUser = async () => {
    const [resultUser, resultHistory] = await Promise.all([axios.get(`${API}/user/me`), getUserHistory()]);
    const user = resultUser.data;
    return Object.assign({}, user, { redeemHistory: resultHistory.data});
}

export const getUserHistory = async () => await axios.get(`${API}/user/history`);

// export const getCategories = (list) => {
//    return [...new Set(list.map(x => x.category))];
// }

export const reedemProduct = async (productId) => await axios.post(`${API}/redeem`, {
    productId
});
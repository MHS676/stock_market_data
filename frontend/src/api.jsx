import axios from 'axios';


const API_URL = 'https://stock-market-data-backend-r3wk.onrender.com';


export const fetchTrades = async (page = 1, limit = 10, tradeCode = "") => {
    const response = await axios.get(`${API_URL}/trade/`, {
        params: { page, limit, trade_code: tradeCode },
    });
    return response.data;
};

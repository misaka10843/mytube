// utils/api.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:5000', // 根据你的API地址进行修改
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
    getVideoList(count, category, random) {
        const params = { count: count || 10, category, random: random === 'true' };
        return apiClient.get('/video/list', { params });
    },

    getVideo(bv) {
        return apiClient.get(`/video/${bv}`);
    },
};
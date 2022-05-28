import request from '@/utils/request';

export const getBanneList = (params) => request.get('/banner', { params });

export const getRecommendList = () => request.get('/personalized');

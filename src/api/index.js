import request from '@/utils/request';

export const getBannerList = (params) => request.get('/banner', { params });

export const getRecommendList = () => request.get('/personalized');

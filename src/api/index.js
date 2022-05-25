import request from '../utils/request';

export function getBanner(params) {
  return request.get('/banner', { params });
}

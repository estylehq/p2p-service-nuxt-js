import { METHOD_POST, METHOD_GET, request } from '~/api';

export default {
  getCategories() {
    return request({
      url: 'board/faq/category',
      method: METHOD_GET,
    });
  },
  getList(cateType) {
    return request({
      url: 'board/faq/list',
      method: METHOD_POST,
      params: {
        cateType: cateType || '01',
      },
    });
  },
};

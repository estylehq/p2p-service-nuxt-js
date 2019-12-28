import { METHOD_POST, METHOD_GET, request } from '~/api';

export default {
  getList(page) {
    return request({
      url: 'board/article/list',
      method: METHOD_GET,
      params: {
        boardSeq: 1,
        'page.pageNo': page,
        'page.pageSize': 12,
      },
    });
  },
  get(artcSeq) {
    return request({
      url: 'board/article/view',
      method: METHOD_POST,
      params: {
        artcSeq,
      },
    });
  },
};

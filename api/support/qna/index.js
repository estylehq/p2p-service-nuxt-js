import { METHOD_POST, METHOD_GET, request } from '~/api';

export default {
  getList(page) {
    return request({
      url: 'board/qna/list',
      method: METHOD_GET,
      params: {
        'page.pageNo': page,
        'page.pageSize': 12,
      },
    });
  },
  get(qnaSeq) {
    return request({
      url: 'board/qna/view',
      method: METHOD_POST,
      params: { qnaSeq },
    });
  },
  write(title, content) {
    return request({
      url: 'board/qna/add',
      method: METHOD_POST,
      params: { title, content },
    });
  },
};

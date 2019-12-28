import _ from 'lodash';
import { FAQ_GET_LIST } from '~/store/mutation-types';

function parse(object) {
  return {
    id: object.faqSeq,
    type: object.cateType,
    typeText: object.cateName,
    title: object.title,
    content: object.content,
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  items: [],
};

const mutations = {
  [FAQ_GET_LIST](state, { success, message, error, items }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.items = items || [];
  },
};

const actions = {
  getList({ commit }, type) {
    let faqs = [];
    for (let i = 1; i <= 9; i++) {
      faqs = [
        ...faqs,
        {
          faqSeq: i,
          cateType: '',
          cateName: '',
          title: 'FAQ 질문 ' + i,
          content: 'FAQ 답변 ' + i,
        },
      ];
    }

    commit(FAQ_GET_LIST, {
      success: true,
      message: null,
      items: _.map(faqs, faq => parse(faq)),
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

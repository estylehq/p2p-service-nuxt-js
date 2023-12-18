import _ from 'lodash';
import { QNA_GET_LIST, USER_LOGOUT } from '~/store/mutation-types';

export function parse(object) {
  return {
    id: object.qnaSeq,
    title: object.title,
    replies: object.replyCnt,
    created: new Date(object.regDtm),
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  items: [],
  totalItems: 0,
};

const mutations = {
  [QNA_GET_LIST](state, { success, message, error, items, totalItems }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.items = items || [];
    state.totalItems = totalItems || 0;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.error = null;
    state.items = [];
    state.totalItems = 0;
  },
};

const actions = {
  getList({ commit }, current) {
    let qnas = [];
    for (let i = 1; i <= 10; i++) {
      qnas = [
        ...qnas,
        {
          qnaSeq: i,
          title: `질문 ${i} 입니다.`,
          replyCnt: i,
          regDtm: new Date().getMilliseconds(),
        },
      ];
    }
    commit(QNA_GET_LIST, {
      success: true,
      message: null,
      items: _.map(qnas, qna => parse(qna)),
      totalItems: qnas.length,
    });
  },
  clear({ commit }) {
    commit(USER_LOGOUT);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

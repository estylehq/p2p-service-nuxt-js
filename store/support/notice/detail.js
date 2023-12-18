import { parse as listParser } from './list';
import { NOTICE_GET_DETAIL } from '~/store/mutation-types';

function parse(object) {
  return {
    ...listParser(object),
    content: object.content,
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  detail: {},
};

const mutations = {
  [NOTICE_GET_DETAIL](state, { success, message, error, detail }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.detail = detail || {};
  },
  clear(state) {
    state.success = false;
    state.message = null;
    state.error = null;
    state.detail = {};
  },
};

const actions = {
  get({ commit }, id) {
    const detail = {
      artcSeq: id,
      title: '공지사항 ' + id,
      content: `공지사항 ${id}의 내용입니다.`,
      regDtm: new Date().getMilliseconds(),
    };

    commit(NOTICE_GET_DETAIL, {
      success: true,
      message: null,
      detail: parse(detail),
    });
  },
  clear({ commit }) {
    commit('clear');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

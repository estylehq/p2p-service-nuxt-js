import _ from 'lodash';
import { parse as listParse } from './list';
import { QNA_GET_DETAIL, USER_LOGOUT } from '~/store/mutation-types';

function parse(object) {
  return {
    ...listParse(object),
    content: object.content,
  };
}

function parseReply(object) {
  return {
    content: object.reply,
    created: new Date(object.regDtm),
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  detail: {},
  replies: [],
};

const mutations = {
  [QNA_GET_DETAIL](state, { success, message, error, detail, replies }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.detail = detail || {};
    state.replies = replies || [];
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.error = null;
    state.detail = {};
    state.replies = [];
  },
};

const actions = {
  get({ commit }, id) {
    const detail = {
      qnaSeq: id,
      title: `질문 ${id} 입니다.`,
      content: `질문 ${id}에 대한 내용입니다.`,
      replyCnt: 5,
      regDtm: new Date().getMilliseconds(),
    };

    let replies = [];
    for (let i = 1; i <= detail.replyCnt; i++) {
      replies = [
        ...replies,
        {
          reply: `질문 ${id}에 대한 ${i} 답변 입니다.`,
          regDtm: new Date().getMilliseconds(),
        },
      ];
    }

    commit(QNA_GET_DETAIL, {
      success: true,
      message: null,
      detail: parse(detail),
      replies: _.map(replies, reply => parseReply(reply)),
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

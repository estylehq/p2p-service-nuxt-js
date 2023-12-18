import { FIND_EMAIL } from '~/store/mutation-types';

const state = {
  email: null,
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [FIND_EMAIL](state, { success, message, email, error }) {
    state.success = success;
    state.message = message || null;
    state.email = email || null;
    state.error = error || null;
  },
  clear(state) {
    state.success = false;
    state.message = null;
    state.email = null;
    state.error = null;
  },
};

const actions = {
  find({ commit }, { name, contact }) {
    commit('clear');
    const isNameMatched = name === '가나다';
    const isContactMatched = contact === '01012345678';
    const success = isNameMatched && isContactMatched;
    commit(FIND_EMAIL, {
      success,
      message: success ? null : '데이터를 찾을 수 없습니다.',
      email: success ? 'example@email.com' : null,
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

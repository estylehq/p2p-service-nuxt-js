import { USER_LOGIN, USER_LOGOUT } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_LOGIN](state, { success, message, error }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.error = null;
  },
};

const actions = {
  signIn({ commit }, { email, password }) {
    commit(USER_LOGOUT);

    const isEmailMatched = email === 'example@email.com';
    const isPasswordMatched = password === 'password';
    const success = isEmailMatched && isPasswordMatched;
    commit(USER_LOGIN, {
      success,
      message: success ? null : '아이디 혹은 패스워드가 일치하지 않습니다.',
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

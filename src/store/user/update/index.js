import _ from 'lodash';
import api from '~/api/user';
import UserUpdateConvertor from '~/util/convertor/user/update';
import { USER_UPDATE, USER_LOGOUT } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
};

const mutations = {
  [USER_UPDATE](state, { success, message }) {
    state.success = success;
    state.message = message || null;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
  },
};

const actions = {
  async updatePolicies({ commit }, policies) {
    commit(USER_LOGOUT);
    try {
      await _.map(Object.keys(policies), async function(agree) {
        await api.agree(agree, policies[agree].value ? '01' : '02');
      });
      commit(USER_UPDATE, { success: true, message: null });
    } catch (error) {
      commit(USER_UPDATE, { success: false, message: error.toString() });
    }
  },
  async update({ commit }, update) {
    commit(USER_LOGOUT);
    try {
      const params = UserUpdateConvertor.convert(update);
      const response = await api.update(params);
      const { code, msg } = response.result;
      const success = code === 1;
      const message = success ? null : msg;
      if (success) {
        commit(`user/${USER_UPDATE}`, { ...update }, { root: true });
      }
      commit(USER_UPDATE, { success, message });
    } catch (error) {
      commit(USER_UPDATE, { success: false, message: error.toString() });
    }
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

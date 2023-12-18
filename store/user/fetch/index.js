import api from '~/api/user';
import { USER_FETCH, USER_LOGOUT } from '~/store/mutation-types';
import UserParser from '~/util/parser/user/user-parser';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_FETCH](state, { success, message, error }) {
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
  fetch({ commit }) {
    commit(USER_LOGOUT);
    commit(USER_FETCH, { success: true, message: null });
    const member = {
      memSeq: 6,
      emailAgree: '02',
      emailAgreeName: '비동의',
      smsAgree: '02',
      smsAgreeName: '비동의',
      deposit: 0,
      memId: 'email@example.com',
      memType: '01',
      memTypeName: '개인',
      memStat: '01',
      memStatName: '사용중',
      memName: '누구',
      investType: '01',
      investTypeName: '개인(일반)',
      lenderCond: '01',
      lenderCondName: '일반',
      birthday: '990909',
      sex: '1',
      sexName: '?',
      tel: '01012345678',
      zipcode: '00000',
      addr1: '서울 강남구 어디길 00-00',
      addr2: '100호',
      joinDtm: 1551513064006,
      udtDtm: 1568090927634,
    };
    commit(`user/${USER_FETCH}`, UserParser.parse(member), { root: true });
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

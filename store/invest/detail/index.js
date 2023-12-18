import detailParser from '~/util/parser/invest/detail-parser';
import { INVEST_GET_DETAIL } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  id: null,
  name: null,
  type: null,
  rate: null,
  start: null,
  end: null,
  state: null,
  current: null,
  target: null,
  refund: null,
  months: null,
  joined: null,
  funded: null,
  invest: null,
  contents: [],
};

const mutations = {
  [INVEST_GET_DETAIL](state, { success, message, error, detail }) {
    state.success = success;
    state.message = message || null;
    if (!detail) {
      return;
    }
    const {
      id,
      name,
      type,
      rate,
      start,
      end,
      current,
      target,
      refund,
      months,
      joined,
      funded,
      invest,
      contents,
    } = detail;
    state.id = id;
    state.name = name;
    state.type = type;
    state.rate = rate;
    state.start = start;
    state.end = end;
    state.current = current;
    state.target = target;
    state.refund = refund;
    state.months = months;
    state.joined = joined;
    state.funded = funded;
    state.invest = invest;
    state.contents = contents;
    state.state = detail.state;
  },
  clear(state) {
    state.success = false;
    state.message = null;
    state.id = null;
    state.name = null;
    state.type = null;
    state.rate = null;
    state.start = null;
    state.end = null;
    state.state = null;
    state.current = null;
    state.target = null;
    state.refund = null;
    state.months = null;
    state.joined = null;
    state.funded = null;
    state.invest = null;
  },
};

const actions = {
  get({ rootState, commit }, id) {
    commit('clear');

    const dummy = {
      fundSeq: id,
      fundName: '펀드 ' + id,
      fundTypeName: '펀드 종류',
      fundType: '01',
      intRate: '10.0',
      fundSdtm: new Date().getMilliseconds(),
      fundEdtm: new Date().getMilliseconds(),
      fundStatName: '펀딩 중',
      fundStat: '21',
      curFundMny: 2000000,
      fundMny: 10000000,
      refundTypeName: '상환 방법',
      refundType: '01',
      refundMonth: 12,
      fundMemCnt: 99,
      myInvStat: rootState['sign-in'].success ? '01' : '00',
      invMny: 100000,
      contents: [
        {
          title: 'No contents',
          content: 'No has any content(s)',
        },
      ],
    };

    commit(INVEST_GET_DETAIL, {
      success: true,
      message: false,
      detail: detailParser.parse(dummy),
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

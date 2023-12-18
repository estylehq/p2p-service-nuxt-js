import _ from 'lodash';
import { FAQ_GET_CATEGORIES } from '~/store/mutation-types';

function parse(object) {
  return {
    text: object.cateName,
    value: object.cateType,
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  items: [],
};

const mutations = {
  [FAQ_GET_CATEGORIES](state, { success, message, error, items }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.items = items || [];
  },
};

const actions = {
  getCategories({ commit }) {
    const categories = [
      {
        cateName: '카테고리 1',
        cateType: '01',
      },
      {
        cateName: '카테고리 2',
        cateType: '02',
      },
      {
        cateName: '카테고리 3',
        cateType: '03',
      },
    ];
    commit(FAQ_GET_CATEGORIES, {
      success: true,
      message: null,
      items: _.map(categories, item => parse(item)),
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

import {
  USER_LOGOUT,
  USER_FETCH,
  USER_UPDATE,
  USER_UPDATE_BANK,
} from '~/store/mutation-types';

const state = {
  email: null,
  name: null,
  contact: null,
  gender: null,
  created: null,
  updated: null,
  type: null,
  birth: null,
  company: {
    name: null,
    code: null,
  },
  lender: {
    text: null,
    value: null,
  },
  subscribes: {
    email: false,
    sms: false,
  },
  investor: {
    type: {
      text: null,
      value: null,
    },
    account: {
      name: null,
      code: null,
      id: null,
      owner: null,
    },
  },
  refund: {
    account: {
      name: null,
      code: null,
      id: null,
      owner: null,
    },
  },
  address: {
    postcode: null,
    cityState: null,
    detail: null,
  },
};

const mutations = {
  [USER_FETCH](
    state,
    {
      email,
      name,
      contact,
      gender,
      created,
      updated,
      type,
      birth,
      company,
      lender,
      subscribes,
      investor,
      refund,
      address,
    }
  ) {
    state.email = email;
    state.name = name;
    state.contact = contact;
    state.gender = gender;
    state.created = created;
    state.updated = updated;
    state.type = type;
    state.birth = birth;
    state.company = {
      ...state.company,
      ...company,
    };
    state.lender = {
      ...state.lender,
      ...lender,
    };
    state.subscribes = {
      ...state.subscribes,
      ...subscribes,
    };
    state.investor = {
      ...state.investor,
      ...investor,
    };
    state.refund = {
      ...state.refund,
      ...refund,
    };
    state.address = {
      ...state.address,
      ...address,
    };
  },
  [USER_UPDATE](
    state,
    {
      email,
      name,
      contact,
      gender,
      created,
      updated,
      type,
      birth,
      company,
      lender,
      subscribes,
      investor,
      refund,
      address,
    }
  ) {
    if (email && email !== null) {
      state.email = email;
    }
    if (name && name !== null) {
      state.name = name;
    }
    if (contact && contact !== null) {
      state.contact = contact;
    }
    if (gender && gender !== null) {
      state.gender = gender;
    }
    if (created && created !== null) {
      state.created = created;
    }
    if (updated && updated !== null) {
      state.updated = updated;
    }
    if (type && type !== null) {
      state.type = type;
    }
    if (birth && birth !== null) {
      state.birth = birth;
    }

    if (company) {
      state.company = {
        ...state.company,
        ...company,
      };
    }
    if (lender) {
      state.lender = {
        ...state.lender,
        ...lender,
      };
    }
    if (subscribes) {
      state.subscribes = {
        ...state.subscribes,
        ...subscribes,
      };
    }
    if (investor) {
      const { type, account } = investor;
      if (type) {
        state.investor.type = {
          ...state.investor.type,
          ...type,
        };
      }

      if (account) {
        state.investor.account = {
          ...state.investor.account,
          ...account,
        };
      }
    }
    if (refund) {
      state.refund = {
        ...state.refund,
        ...refund,
      };
    }
    if (address) {
      state.address = {
        ...state.address,
        ...address,
      };
    }
  },
  [USER_UPDATE_BANK](state, account) {
    state.refund.account = {
      ...account,
    };
  },
  [USER_LOGOUT](state) {
    state.email = null;
    state.name = null;
    state.contact = null;
    state.gender = null;
    state.created = null;
    state.updated = null;
    state.type = null;
    state.birth = null;
    state.company = {
      name: null,
      code: null,
    };
    state.lender = {
      text: null,
      value: null,
    };
    state.subscribes = {
      email: false,
      sms: false,
    };
    state.investor = {
      type: {
        text: null,
        value: null,
      },
      account: {
        name: null,
        code: null,
        id: null,
        owner: null,
      },
    };
    state.refund = {
      account: {
        name: null,
        code: null,
        id: null,
        owner: null,
      },
    };
    state.address = {
      postcode: null,
      cityState: null,
      detail: null,
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};

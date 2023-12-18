import api from '~/api/user';
import {
  SESSION_UPDATE,
  USER_LOGIN,
  USER_UPDATE,
} from '~/store/mutation-types';
import { COOKIE_KEY_SESSION_TOKEN } from '~/store/session';
import parser from '~/util/parser/user/user-parser';

export default async function({ store, app }) {
  let ssn = store.state.session.token || '';
  if (ssn === null || ssn.length <= 0) {
    ssn = app.$cookies.get(COOKIE_KEY_SESSION_TOKEN);
  }
  try {
    const response = await api.session(ssn);
    const { result, loginMember } = response;
    const { code } = result;
    const success = code === 1;

    if (!success) {
      ssn = app.$cookies.set(COOKIE_KEY_SESSION_TOKEN, null);
      return;
    }
    store.commit(
      `session/${SESSION_UPDATE}`,
      { token: success ? response.ssn : null },
      { root: true }
    );
    store.commit(
      `sign-in/${USER_LOGIN}`,
      { success: true, message: null },
      { root: true }
    );
    const { email } = store.state.user;
    if (email === null) {
      store.commit(`user/${USER_UPDATE}`, parser.parse(loginMember), {
        root: true,
      });
    }
  } catch (e) {
    store.commit(`session/${SESSION_UPDATE}`, { token: null }, { root: true });
    store.commit(
      `sign-in/${USER_LOGIN}`,
      { success: false, message: e.toString() },
      { root: true }
    );
  }
}

import appbar from './appbar';
import about from './about';
import button from './button';
import contact from './contact';
import dashboard from './dashboard';
import dialog from './dialog';
import floating from './floating';
import forgot from './forgot';
import invest from './invest';
import security from './security';
import signIn from './sign-in';
import signUp from './sign-up';
import support from './support';
import resetPassword from './reset-password';
import policy from './policy';
import user from './user';
import error from './error';

export const currencyFormats = {
  currency: {
    style: 'currency',
    currency: 'KRW',
  },
};

export const dateTimeFormats = {
  short: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  },
  long: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  },
};

export default {
  appbar,
  about,
  button,
  contact,
  dashboard,
  dialog,
  error,
  floating,
  forgot,
  invest,
  security,
  support,
  policy,
  user,
  'sign-in': signIn,
  'sign-up': signUp,
  'reset-password': resetPassword,
  unknown: '알 수 없음',
  'page-title': 'P2P 서비스에 오신 것을 환영합니다.',
  'page-title-format': '{value} / P2P 서비스에 오신 것을 환영합니다.',
};

import cookie from 'js-cookie';

export const Log = {
  doLogin: (token: string) => {
    cookie.set('token', token);
  },
  doLogOut: () => {
    cookie.remove('token');
    window.location.href = '/sign-in';
  },
};

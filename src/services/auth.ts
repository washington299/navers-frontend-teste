import cookie from 'js-cookie';
import { api } from 'services/api';

export const Log = {
  doLogin: (token: string) => {
    cookie.set('token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
  },
  doLogOut: () => {
    cookie.remove('token');
    window.location.href = '/';
  },
};

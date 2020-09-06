import axios from 'axios';
import cookie from 'js-cookie';

import { BASE_URL } from './api';

export const Log = {
  doLogin: (token: string) => {
    cookie.set('token', token);
  },
  isLogged: async () => {
    const token = cookie.get('token');
    const response = await axios.get(`${BASE_URL}/navers`, { headers: { Authorization: `Bearer ${token}` } });

    if (response.status === 200) {
      return true;
    }

    return Log.doLogOut();
  },
  doLogOut: () => {
    cookie.remove('token');
    return false;
  },
};

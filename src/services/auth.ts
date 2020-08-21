import api from '../services/api';

export const isAuthenticated = async (token: string) => {
  const res = await api.get('/navers', { headers: { Authorization: `Bearer ${token}` } });
  const auth = res.data;

  if (auth.statusCode === 401) {
    return false;
  }

  return true;
};

import axios from 'axios';

const BASE_URL = 'https://navedex-api.herokuapp.com/v1';

export const SignIn = async (email: string, password: string) => {
  const res = await axios.post(`${BASE_URL}/users/login`, { email, password });
  return res.data;
};

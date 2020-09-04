import axios from 'axios';

import * as I from '../interfaces';
import { convert_date_to_brazilian_format } from '../helpers/date-calculate';

const BASE_URL = 'https://navedex-api.herokuapp.com/v1';

export const SignIn = async (email: string, password: string) => {
  const res = await axios.post(`${BASE_URL}/users/login`, { email, password });
  return res.data;
};

export const GetAllNavers = (token: string) => {
  const response = axios.get(`${BASE_URL}/navers`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data)
    .catch(() => false);

  return response;
};

export const CreateNaver = (naver: I.Naver, token: string) => {
  const response = axios.post(`${BASE_URL}/navers`, {
    name: naver.name,
    birthdate: convert_date_to_brazilian_format(naver.birthdate),
    project: naver.project,
    job_role: naver.job_role,
    admission_date: convert_date_to_brazilian_format(naver.admission_date),
    url: naver.url,
  }, { headers: { Authorization: `Bearer ${token}` } })
    .then(() => true)
    .catch(() => false);

  return response;
};

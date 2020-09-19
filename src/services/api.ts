import axios from 'axios';
import cookie from 'js-cookie';

import * as I from 'interfaces';
import { convert_date_to_brazilian_format } from 'helpers/date-calculate';
import { Log } from 'services/auth';

const token = cookie.get('token');
const persistedToken = token ? `Bearer ${token}` : '';

export const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
  headers: {
    Authorization: persistedToken,
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/users/login', { email, password });
    return response;
  } catch (error) {
    return false;
  }
};

export const GetAllNavers = async () => {
  try {
    const response = await api.get('/navers');
    return response.data;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const getUniqueNaver = async (id: string) => {
  try {
    const response = await api.get(`/navers/${id}`);
    return response.data;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const CreateNaver = async (naver: I.Naver) => {
  try {
    await api.post('/navers', {
      name: naver.name,
      birthdate: convert_date_to_brazilian_format(naver.birthdate),
      project: naver.project,
      job_role: naver.job_role,
      admission_date: convert_date_to_brazilian_format(naver.admission_date),
      url: naver.url,
    });

    return true;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const updateNaver = async (naver: I.Naver, id: string) => {
  try {
    await api.put(`/navers/${id}`, {
      name: naver.name,
      birthdate: convert_date_to_brazilian_format(naver.birthdate),
      project: naver.project,
      job_role: naver.job_role,
      admission_date: convert_date_to_brazilian_format(naver.admission_date),
      url: naver.url,
    });

    return true;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const deleteNaver = async (id: string) => {
  try {
    await api.delete(`/navers/${id}`);
    return true;
  } catch (error) {
    return Log.doLogOut();
  }
};

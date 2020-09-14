import axios from 'axios';
import cookie from 'js-cookie';

import * as I from 'interfaces';
import { convert_date_to_brazilian_format } from 'helpers/date-calculate';
import { Log } from 'services/auth';

export const BASE_URL = 'https://navedex-api.herokuapp.com/v1';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, { email, password });
    return response;
  } catch (error) {
    return false;
  }
};

export const GetAllNavers = async () => {
  const token = cookie.get('token');
  try {
    const response = await axios.get(`${BASE_URL}/navers`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const getUniqueNaver = async (id: string) => {
  const token = cookie.get('token');
  try {
    const response = await axios.get(`${BASE_URL}/navers/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const CreateNaver = async (naver: I.Naver) => {
  const token = cookie.get('token');
  try {
    await axios.post(`${BASE_URL}/navers`, {
      name: naver.name,
      birthdate: convert_date_to_brazilian_format(naver.birthdate),
      project: naver.project,
      job_role: naver.job_role,
      admission_date: convert_date_to_brazilian_format(naver.admission_date),
      url: naver.url,
    }, { headers: { Authorization: `Bearer ${token}` } });

    return true;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const updateNaver = async (naver: I.Naver, id: string) => {
  const token = cookie.get('token');
  try {
    await axios.put(`${BASE_URL}/navers/${id}`, {
      name: naver.name,
      birthdate: convert_date_to_brazilian_format(naver.birthdate),
      project: naver.project,
      job_role: naver.job_role,
      admission_date: convert_date_to_brazilian_format(naver.admission_date),
      url: naver.url,
    }, { headers: { Authorization: `Bearer ${token}` } });

    return true;
  } catch (error) {
    return Log.doLogOut();
  }
};

export const deleteNaver = async (id: string) => {
  const token = cookie.get('token');
  try {
    await axios.delete(`${BASE_URL}/navers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return true;
  } catch (error) {
    return Log.doLogOut();
  }
};

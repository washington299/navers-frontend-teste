import React, { createContext, useReducer, useContext } from 'react';

import * as I from 'interfaces';

const initialValue = {
  id: '',
  name: '',
  admission_date: '',
  job_role: '',
  user_id: '',
  project: '',
  birthdate: '',
  url: '',
};

const NaverContextState = createContext<I.Naver>(initialValue);
const NaverContextDispatch = createContext<React.Dispatch<Action>>(() => {});

type State = I.Naver;
type Action = | { type: 'GET_NAVER_DATA', payload: I.Naver }
              | { type: 'CLEAR_NAVER_DATA', payload: I.Naver }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_NAVER_DATA':
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        admission_date: action.payload.admission_date,
        job_role: action.payload.job_role,
        user_id: action.payload.user_id,
        project: action.payload.project,
        birthdate: action.payload.birthdate,
        url: action.payload.url,
      };
    case 'CLEAR_NAVER_DATA':
      return { ...state, initialValue };
    default:
      return state;
  }
}

export const NaverProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <NaverContextDispatch.Provider value={dispatch}>
      <NaverContextState.Provider value={state}>
        {children}
      </NaverContextState.Provider>
    </NaverContextDispatch.Provider>
  );
};

export const useNaverState = () => useContext(NaverContextState);
export const useNaverDispatch = () => useContext(NaverContextDispatch);

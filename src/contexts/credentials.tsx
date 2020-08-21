import React, { createContext, useReducer, useContext } from 'react';

const initialValue = {
  id: '',
  email: '',
  token: '',
};

const CredentialsContextState = createContext(initialValue);
const CredentialsContextDispatch = createContext<React.Dispatch<any>>(() => ({}));

type Props = {
  children: React.ReactNode
};

type State = {
  id: string,
  email: string,
  token: string,
};

type Action = | { type: 'GET_USER_CREDENTIALS', payload: State } | { type: 'REMOVE_USER_CREDENTIALS' };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_USER_CREDENTIALS':
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
      };
    case 'REMOVE_USER_CREDENTIALS':
      return {
        ...state, id: '', email: '', token: '',
      };
    default:
      return state;
  }
}

export const CredentialsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <CredentialsContextDispatch.Provider value={dispatch}>
      <CredentialsContextState.Provider value={state}>
        { children }
      </CredentialsContextState.Provider>
    </CredentialsContextDispatch.Provider>
  );
};

export const useCredentialsState = () => useContext(CredentialsContextState);
export const useCredentialsDispatch = () => useContext(CredentialsContextDispatch);

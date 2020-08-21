import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../services/api';
import { useCredentialsDispatch } from '../../contexts/credentials';

import {
  Container,
  Card,
  FormLogo,
  FormFieldArea,
  FormButton,
} from './styles';
import { Input, Label } from '../../styles/global-elements';

const Login: React.FC = () => {
  const history = useHistory();
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const dispatch = useCredentialsDispatch();
  const { handleSubmit, register, errors } = useForm();

  async function onSubmit(values: any) {
    const { email, password } = values;
    api.post('/users/login', { email, password })
      .then((res) => {
        dispatch({
          type: 'GET_USER_CREDENTIALS',
          payload: {
            id: res.data.id,
            email: res.data.email,
            token: res.data.token,
          },
        });
        history.push('/navers');
      })
      .catch(() => setInvalidCredentials(true));
  }

  return (
    <Container>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <FormLogo height={50} />
        {invalidCredentials && <span>E-mail e/ou senha incorretos!!!</span>}
        <FormFieldArea>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            ref={register({ required: 'Campo obrigatório!!!' })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </FormFieldArea>
        <FormFieldArea>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            ref={register({ required: 'Campo obrigatório!!!', minLength: 6 })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </FormFieldArea>
        <FormButton type="submit" value="Entrar" />
      </Card>
    </Container>
  );
};

export default Login;

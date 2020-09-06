import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { login } from '../../services/api';
import { Log } from '../../services/auth';

import {
  Container,
  Card,
  Logo,
  FormFieldArea,
  FormButton,
} from './styles';
import { Input, Label, AlertMsg } from '../../styles/global-elements';

const Login: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  async function onSubmit(values: any) {
    const { email, password } = values;
    const authenticated = await login(email, password);

    if (!authenticated) {
      setInvalidCredentials(true);
      return;
    }

    Log.doLogin(authenticated.data.token);
    history.push('/navers');
  }

  return (
    <Container>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <Logo height={50} />
        {invalidCredentials && <AlertMsg center="center">E-mail e/ou senha incorretos!!!</AlertMsg>}
        <FormFieldArea>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            ref={register({ required: 'Campo obrigatório!!!' })}
          />
          {errors.email && <AlertMsg>{errors.email.message}</AlertMsg>}
        </FormFieldArea>
        <FormFieldArea>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            ref={register({ required: 'Campo obrigatório!!!', minLength: 6 })}
          />
          {errors.password && <AlertMsg>{errors.password.message}</AlertMsg>}
        </FormFieldArea>
        <FormButton type="submit">Entrar</FormButton>
      </Card>
    </Container>
  );
};

export default Login;

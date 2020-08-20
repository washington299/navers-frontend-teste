import React from 'react';

import Field from '../../components/Field';

import {
  Container, Card, FormLogo, FormButton,
} from './styles';

const Login: React.FC = () => (
  <Container>
    <Card>
      <FormLogo height={50} />
      <Field label="E-mail" name="email" />
      <Field label="Senha" name="password" />
      <FormButton>Entrar</FormButton>
    </Card>
  </Container>
);

export default Login;

import React from 'react';
import { useForm } from 'react-hook-form';

import { Input, Label } from '../../styles/global-elements';
import {
  Container, Card, FormLogo, FormFieldArea, FormButton,
} from './styles';

const Login: React.FC = () => {
  const { handleSubmit, register, errors } = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <Container>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <FormLogo height={50} />
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
            ref={register({ required: 'Campo obrigatório!!!' })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </FormFieldArea>
        <FormButton type="submit" value="Entrar" />
      </Card>
    </Container>
  );
};

export default Login;

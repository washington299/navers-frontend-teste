import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowBackIos } from '@material-ui/icons';

import Header from '../../components/Header';

import {
  Container, Content, Top, Title, Form, FormFieldArea, FormButton,
} from './styles';
import { Label, Input } from '../../styles/global-elements';

const AddNaver: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Top>
            <Link to="/navers">
              <ArrowBackIos />
            </Link>
            <Title>Adicionar Naver</Title>
          </Top>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormFieldArea>
              <Label>Nome</Label>
              <Input type="text" name="name" placeholder="Nome" ref={register} />
            </FormFieldArea>
            <FormFieldArea>
              <Label>Idade</Label>
              <Input type="date" name="birthdate" placeholder="Idade" ref={register} />
            </FormFieldArea>
            <FormFieldArea>
              <Label>Projetos que participou</Label>
              <Input type="text" name="project" placeholder="Projetos que participou" ref={register} />
            </FormFieldArea>
            <FormFieldArea>
              <Label>cargo</Label>
              <Input type="text" name="job_role" placeholder="Cargo" ref={register} />
            </FormFieldArea>
            <FormFieldArea>
              <Label>Tempo de empresa</Label>
              <Input type="date" name="admission_date" placeholder="Tempo de empresa" ref={register} />
            </FormFieldArea>
            <FormFieldArea>
              <Label>URL da foto do naver</Label>
              <Input type="text" name="url" placeholder="URL da foto do naver" ref={register} />
            </FormFieldArea>
            <FormButton type="submit">Salvar</FormButton>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default AddNaver;

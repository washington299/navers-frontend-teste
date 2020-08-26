import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBackIos } from '@material-ui/icons';

import Header from '../../components/Header';

import {
  Container, Content, Top, Title, Form, FormFieldArea, FormButton,
} from './styles';
import { Label, Input } from '../../styles/global-elements';

const AddNaver: React.FC = () => (
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
        <Form>
          <FormFieldArea>
            <Label>Nome</Label>
            <Input type="text" name="name" placeholder="Nome" />
          </FormFieldArea>
          <FormFieldArea>
            <Label>Idade</Label>
            <Input type="text" name="birthdate" placeholder="Idade" />
          </FormFieldArea>
          <FormFieldArea>
            <Label>Projetos que participou</Label>
            <Input type="text" name="project" placeholder="Projetos que participou" />
          </FormFieldArea>
          <FormFieldArea>
            <Label>cargo</Label>
            <Input type="text" name="job_role" placeholder="Cargo" />
          </FormFieldArea>
          <FormFieldArea>
            <Label>Tempo de empresa</Label>
            <Input type="text" name="admission_date" placeholder="Tempo de empresa" />
          </FormFieldArea>
          <FormFieldArea>
            <Label>URL da foto do naver</Label>
            <Input type="text" name="url" placeholder="URL da foto do naver" />
          </FormFieldArea>
          <FormButton defaultValue="Salvar" readOnly />
        </Form>
      </Content>
    </Container>
  </>
);

export default AddNaver;

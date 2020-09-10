import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowBackIos } from '@material-ui/icons';

import { CreateNaver } from '../../services/api';

import Header from '../../components/Header';
import EditNaverModal from '../../components/Modals/EditNaver';

import {
  Container,
  Content,
  Top,
  Title,
  Form,
  FormFieldArea,
  FormButton,
} from './styles';
import { Label, Input, AlertMsg } from '../../styles/global-elements';

const EditNaver: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [addModal, setAddModal] = useState(false);

  async function onSubmit(values: any) {
    const res = await CreateNaver(values);
    if (res) setAddModal(true);
  }

  return (
    <>
      {addModal && (
        <EditNaverModal closeButton={setAddModal} />
      )}
      <Header />
      <Container>
        <Content>
          <Top>
            <Link to="/navers">
              <ArrowBackIos />
            </Link>
            <Title>Editar Naver</Title>
          </Top>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormFieldArea>
              <Label>Nome</Label>
              <Input type="text" name="name" placeholder="Nome" ref={register({ required: 'Campo obrigatório!!!' })} />
              {errors.name && <AlertMsg>{errors.name.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>Idade</Label>
              <Input type="date" name="birthdate" placeholder="Idade" ref={register({ required: 'Campo obrigatório!!!' })} />
              {errors.birthdate && <AlertMsg>{errors.birthdate.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>Projetos que participou</Label>
              <Input type="text" name="project" placeholder="Projetos que participou" ref={register({ required: 'Campo obrigatório!!!' })} />
              {errors.project && <AlertMsg>{errors.project.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>cargo</Label>
              <Input type="text" name="job_role" placeholder="Cargo" ref={register({ required: 'Campo obrigatório!!!' })} />
              {errors.job_role && <AlertMsg>{errors.job_role.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>Tempo de empresa</Label>
              <Input type="date" name="admission_date" placeholder="Tempo de empresa" ref={register({ required: 'Campo obrigatório!!!' })} />
              {errors.admission_date && <AlertMsg>{errors.admission_date.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>URL da foto do naver</Label>
              <Input type="text" name="url" placeholder="URL da foto do naver" ref={register({ required: 'Campo obrigatório!!!' })} />
              {errors.url && <AlertMsg>{errors.url.message}</AlertMsg>}
            </FormFieldArea>
            <FormButton type="submit">Salvar</FormButton>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default EditNaver;

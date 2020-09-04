import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowBackIos, Close } from '@material-ui/icons';

import api from '../../services/api';
import { useCredentialsState } from '../../contexts/credentials';
import { convert_date_to_brazilian_format } from '../../helpers/date-calculate';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Top,
  Title,
  Form,
  FormFieldArea,
  FormButton,
  ModalBox,
  ModalTitle,
} from './styles';
import {
  Label, Input, AlertMsg, Modal,
} from '../../styles/global-elements';

const AddNaver: React.FC = () => {
  const history = useHistory();
  const { token } = useCredentialsState();
  const { register, handleSubmit, errors } = useForm();
  const [addModal, setAddModal] = useState(false);

  function onSubmit(values: any) {
    const {
      name, birthdate, project, job_role, admission_date, url,
    } = values;

    api.post('/navers', {
      name,
      birthdate: convert_date_to_brazilian_format(birthdate),
      project,
      job_role,
      admission_date: convert_date_to_brazilian_format(admission_date),
      url,
    }, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => setAddModal(true))
      .catch(() => history.push('/'));
  }

  function handleCloseModal() {
    setAddModal(false);
    history.push('/navers');
  }

  return (
    <>
      {addModal && (
        <Modal>
          <ModalBox>
            <span style={{ display: 'block', textAlign: 'end', cursor: 'pointer' }}>
              <Close onClick={handleCloseModal} />
            </span>
            <ModalTitle>Naver criado</ModalTitle>
            <span>Naver criado com sucesso!</span>
          </ModalBox>
        </Modal>
      )}
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

export default AddNaver;

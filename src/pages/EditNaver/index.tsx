import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowBackIos } from '@material-ui/icons';

import { Naver } from '../../interfaces';
import { getUniqueNaver, updateNaver } from '../../services/api';
import { convert_date_format } from '../../helpers/date-calculate';

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
  const history = useHistory();
  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm();
  const [naver, setNaver] = useState<Naver>({} as Naver);
  const [birthdate, setBirthdate] = useState<string>('');
  const [admissionDate, setAdmissionDate] = useState<string>('');
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    async function getNaver() {
      const res = await getUniqueNaver(id);
      if (res) {
        setNaver(res);
        setBirthdate(convert_date_format(res.birthdate));
        setAdmissionDate(convert_date_format(res.admission_date));
        return;
      }
      history.push('/navers');
    }
    getNaver();
  }, []);

  async function onSubmit(values: any) {
    const res = await updateNaver(values, id);
    if (res) setEditModal(true);
  }

  return (
    <>
      {editModal && (
        <EditNaverModal closeButton={setEditModal} />
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
              <Input
                type="text"
                name="name"
                defaultValue={naver.name}
                placeholder="Nome"
                ref={register({ required: 'Campo obrigatório!!!' })}
              />
              {errors.name && <AlertMsg>{errors.name.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>Idade</Label>
              <Input
                type="date"
                name="birthdate"
                value={birthdate}
                placeholder="Idade"
                ref={register({ required: 'Campo obrigatório!!!' })}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              {errors.birthdate && <AlertMsg>{errors.birthdate.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>Projetos que participou</Label>
              <Input
                type="text"
                name="project"
                defaultValue={naver.project}
                placeholder="Projetos que participou"
                ref={register({ required: 'Campo obrigatório!!!' })}
              />
              {errors.project && <AlertMsg>{errors.project.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>cargo</Label>
              <Input
                type="text"
                name="job_role"
                defaultValue={naver.job_role}
                placeholder="Cargo"
                ref={register({ required: 'Campo obrigatório!!!' })}
              />
              {errors.job_role && <AlertMsg>{errors.job_role.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>Tempo de empresa</Label>
              <Input
                type="date"
                name="admission_date"
                value={admissionDate}
                placeholder="Tempo de empresa"
                ref={register({ required: 'Campo obrigatório!!!' })}
                onChange={(e) => setAdmissionDate(e.target.value)}
              />
              {errors.admission_date && <AlertMsg>{errors.admission_date.message}</AlertMsg>}
            </FormFieldArea>
            <FormFieldArea>
              <Label>URL da foto do naver</Label>
              <Input
                type="text"
                name="url"
                defaultValue={naver.url}
                placeholder="URL da foto do naver"
                ref={register({ required: 'Campo obrigatório!!!' })}
              />
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

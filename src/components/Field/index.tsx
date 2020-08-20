import React from 'react';

import { Container } from './styles';

interface Props {
  label: string,
  name: string,
}

const Field: React.FC<Props> = ({ label, name }: Props) => (
  <Container>
    <label htmlFor={label}>{label}</label>
    <input type="text" name={name} placeholder={label} />
  </Container>
);

export default Field;

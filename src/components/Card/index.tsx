import React from 'react';
import { INaver } from '../../interfaces';

import {
  Container, Name, Job, Icons,
} from './styles';

type Props = {
  naver: INaver,
};

const Card: React.FC<Props> = ({ naver }: Props) => (
  <Container>
    <img src={naver.url} alt={`${naver.name} - ${naver.job_role}`} />
    <Name>{naver.name}</Name>
    <Job>{naver.job_role}</Job>
    <Icons>
      <div>edit</div>
      <div>delete</div>
    </Icons>
  </Container>
);

export default Card;

import styled from 'styled-components';
import { Button } from '../../styles/global-elements';

export const Container = styled.section`
  padding: 10px 15px;

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: var(--large-font-size);

  @media screen and (min-width: 768px) {
    font-size: var(--extra-big-font-size);
  }
`;

export const AddButton = styled(Button)`
  width: 150px;
  height: 30px;
  font-size: var(--small-font-size);

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 40px;
    font-size: var(--normal-font-size);
  }
`;

export const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
`;

import styled from 'styled-components';
import { Button } from '../../styles/global-elements';

export const HomeStyles = styled.section`
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Title = styled.h1`
  font-size: var(--large-font-size);

  @media screen and (min-width: 768px) {
    font-size: var(--extra-big-font-size);
  }
`;

export const AddButton = styled(Button)`
  height: 25px;
  font-size: var(--extra-small-font-size);
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
`;

export const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 20px;
`;

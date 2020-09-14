import styled from 'styled-components';
import { GlobalLogo } from 'styles/global-elements';

export const Container = styled.header`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const Logo = styled(GlobalLogo)`
  height: 40px;
`;

export const SignOut = styled.div`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

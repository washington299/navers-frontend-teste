import styled from 'styled-components';

export const Logo = styled.img.attrs({
  src: 'assets/images/logo-and-name.png',
  alt: 'Navers Logo',
})`
`;

export const Button = styled.button`
  height: 40px;
  font-weight: 600px;
  font-size: var(--normal-font-size);
  border: 1px solid var(--primary-color);
  cursor: pointer;
`;

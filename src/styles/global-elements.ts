import styled from 'styled-components';

export const Logo = styled.img.attrs({
  src: 'assets/images/logo-and-name.png',
  alt: 'Navers Logo',
})`
`;

export const FieldArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  span {
    margin-top: 5px;
    color: red;
    font-size: var(--small-font-size);
    font-weight: 600;
    text-align: start;
  }
`;

export const Label = styled.label`
  color: var(--primary-color);
  font-size: var(--normal-font-size);
  font-weight: 600;
  text-align: start;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  font-size: var(--normal-font-size);
  border: 1px solid #424242;
`;

export const Button = styled.input`
  height: 40px;
  font-weight: 600px;
  font-size: var(--normal-font-size);
  border: 1px solid var(--primary-color);
  cursor: pointer;
`;

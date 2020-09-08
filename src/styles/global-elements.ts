import styled from 'styled-components';

type Alert = {
  center?: string,
};

export const GlobalLogo = styled.img.attrs({
  src: 'assets/images/logo-and-name.png',
  alt: 'Navers Logo',
})`
`;

export const FieldArea = styled.div`
  display: flex;
  flex-direction: column;

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

export const Button = styled.button`
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  font-size: var(--normal-font-size);
  font-weight: 600px;
  height: 40px;
  text-align: center;
  cursor: pointer;
`;

export const AlertMsg = styled.span<Alert>`
  display: block;
  margin-top: 5px;
  color: red;
  font-size: var(--small-font-size);
  font-weight: 600;
  text-align: ${(props) => props.center || 'start'};
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icons = styled.div`
  display: flex;
  color: var(primary--color);
  font-size: var(--normal-font-size);
  margin-bottom: 15px;

  svg {
    margin-right: 10px;
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

  label {
    color: var(--primary-color);
    font-size: var(--normal-font-size);
    font-weight: 600;
    text-align: start;
    margin-bottom: 5px;
  }
  input {
    height: 40px;
    padding: 0 10px;
    font-size: var(--normal-font-size);
    border: 1px solid #424242;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 100%;
    height: 300px;
  }

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Name = styled.h1`
  margin: 10px 0;
  font-size: var(--normal-font-size);
  font-weight: 600;
`;

export const Job = styled.span`
  display: block;
  margin: 10px 0;
  font-size: var(--normal-font-size);
`;

export const Icons = styled.div`
  display: flex;
  color: var(primary--color);

  svg {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const DeleteNaver = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--secondary-color);
`;

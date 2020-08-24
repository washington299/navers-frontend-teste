import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 100%;
    height: 280px;
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

export const NaverData = styled.div`
  width: 80%;
  height: auto;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column-reverse;

  img {
    width: 100%;
    flex: 1;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InformationArea = styled.div`
  flex: 1;

  .close-button {
    display: block;
    text-align: end;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  margin: 0 15px;
  font-size: var(--big-font-size);

  @media screen and (min-width: 960px) {
    font-size: var(--extra-big-font-size);
    margin: 0 20px;
  }
`;

export const SubTitle = styled(Title)`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 960px) {
    font-size: var(--big-font-size);
  }
`;

export const Text = styled.span`
  display: block;
  margin: 15px 15px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin: 15px 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin: 25px 20px;
  }
`;

export const DeleteNaver = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--secondary-color);
`;

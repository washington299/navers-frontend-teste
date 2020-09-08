import styled from 'styled-components';

export const NaverData = styled.div`
  width: 80%;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Picture = styled.div`
  img {
    width: 100%;
    height: 250px;
  }

  @media screen and (min-width: 768px) {
    flex: 1;

    img {
      height: 100%;
    }
  }
`;

export const InformationArea = styled.div`
  flex: 1;
  padding-left: 15px;

  .close-button {
    display: block;
    text-align: end;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0;
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
  margin: 15px 0;
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

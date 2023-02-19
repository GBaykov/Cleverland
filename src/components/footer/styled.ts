import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  @media (max-width: 620px) {
    height: 104px;
  }
`;

export const FooterContent = styled.div`
  box-sicing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 8%;
  padding: 16px 0;
  border-top: 1px solid #bfc4c9;
  @media (max-width: 768px) {
    margin: 0 8.34%;
  }
  @media (max-width: 620px) {
    justify-content: space-around;
    height: 104px;
    flex-direction: column;
    margin: 0 5%;
    padding: 16px 0 8px;
  }
  @media (max-width: 320px) {
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 168px;
  height: 24px;
  &:hover {
    svg {
      cursor: pointer;
    }
  }
`;

export const Copyright = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1px;
  color: #363636;
  text-align: center;
  @media (max-width: 620px) {
    max-width: 180px;
    font-size: 15px;
    line-height: 133%;
  }
`;

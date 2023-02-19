import styled from 'styled-components';

export const LayoutMainPageContent = styled.main`
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  padding: 47px 11.458% 62px;
  position: relative;

  @media (max-width: 1430px) {
    padding: 30px 8.3% 62px;
  }

  @media (max-width: 767px) {
    padding: 8px 16px 62px;
  }

  @media (max-width: 600px) {
    padding: 8px 5% 62px;
  }
  @media (max-width: 550px) {
    padding: 8px 16px 62px;
  }
`;

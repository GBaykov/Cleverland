import styled from 'styled-components';
import { HOVER } from '../../constants/styles';

export const FormPageWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: ${HOVER};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormPageTitle = styled.div`
color: white;
position: absolute;
font-weight: 700;
font-size: 32px;
line-height: 40px;
top: 10%;
left: 50%;
transform: translateX(-50%);

@media (max-width: 500px) {
  top: 30px;
}
}
`;

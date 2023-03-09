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

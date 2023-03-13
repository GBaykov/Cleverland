import styled from 'styled-components';
import { BLACK40, NEGATIVE } from '../../../constants/styles';

export const StyledHint = styled.p`
  color: ${BLACK40};
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-top: 4px;

  &.fullColored {
    color: ${NEGATIVE};
  }
  &.notDisplayed {
    display: none;
  }
  &.margined {
    margin-top: 32px;
  }
`;
export const ErrorPart = styled.span`
  &.highlight {
    color: ${NEGATIVE};
  }
`;

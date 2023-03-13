import styled from 'styled-components';

import InputMask from 'react-input-mask';
import { BLACK20, BLACK40, BLACK5, DARK, NEGATIVE } from '../../constants/styles';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  margin-top: 32px;
  @media (max-width: 700px) {
    margin-top: 52px;
    &:first-child {
      margin-top: 16px;
    }
  }
`;
export const InputLabel = styled.span<{ disable?: boolean }>`
  position: absolute;
  top: 50%;
  left: 12px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  cursor: text;
  transition: 0.1s ease;
  pointer-events: none;
  color: ${DARK};
`;

export const StyledInput = styled.input<{ disable?: boolean }>`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  padding: 26px 12px 12px 12px;
  background: ${BLACK5};
  border-bottom: 1px solid ${BLACK20};
  &.borderError {
    border-bottom: 1px solid ${NEGATIVE};
  }

  &:valid {
    ~ span {
      top: 0;
      margin-top: 6px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: ${BLACK40};
    }
  }

  &:focus {
    outline: none;
    color: ${DARK};
    ~ span {
      top: 0;
      margin-top: 6px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: ${BLACK20};
    }
  }
`;

export const StyledMask = styled(InputMask)`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  padding: 26px 12px 12px 12px;
  background: ${BLACK5};
  border-bottom: 1px solid ${BLACK20};
  &.borderError {
    border-bottom: 1px solid ${NEGATIVE};
  }

  &:valid {
    ~ span {
      top: 0;
      margin-top: 6px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: ${BLACK40};
    }
  }

  &:focus {
    outline: none;
    color: ${DARK};
    ~ span {
      top: 0;
      margin-top: 6px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: ${BLACK20};
    }
  }
`;
export const InputIcon = styled.img`
  order: none;
  background-color: inherit;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 13px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
  &.checkicon {
    right: 35px;
  }
`;

import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { BLACK10, BLACK20, BLACK40, BLACK5, DARK, HOVER, WHITE } from '../../constants/styles';

export enum ButtonType {
  primaryButton = 'primaryButton',
  secondaryButton = 'secondaryButton',
}
export enum FormButtonType {
  button = 'button',
  submit = 'submit',
}

type Props = {
  title: string;
  type?: ButtonType;
  disabled?: boolean;
  stylesClass?: string;
  handlerType?: FormButtonType;
  onClick?: (e: SyntheticEvent) => void;
  testId?: string;
};

const PrimaryButtonContainer = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8 16px;
  cursor: pointer;
  border-radius: 30px;
  font: 16px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  & p {
    width: 100%;
  }
  &.primaryButton {
    background: ${HOVER};
    border: none;
    color: ${WHITE};
    & p {
    }
    &:hover {
      border: 1px solid ${HOVER};
      box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
    }
    &:active {
      box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
    }
    &:disabled {
      background: ${BLACK10};
      cursor: not-allowed;
    }
  }
  &.secondaryButton {
    background: transparent;
    border: 1px solid ${BLACK20};
    color: ${DARK};
    & p {
    }
    &:hover {
      border: 1px solid ${BLACK40};
      box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
    }
    &:active {
      border: 1px solid ${BLACK20};
      box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
    }
    &:disabled {
      border: ${BLACK20};
      background: ${BLACK5};
      cursor: not-allowed;
      color: ${BLACK40};
      p {
      }
      &:hover {
        box-shadow: none;
        border: ${BLACK20};
        background: ${BLACK5};
      }
    }
  }
`;

export const PrimaryButton: FC<Props> = React.memo(
  ({
    title,
    type,
    disabled = false,
    stylesClass,
    handlerType = FormButtonType.button,
    onClick = () => null,
    testId = '',
  }) => (
    <PrimaryButtonContainer
      data-test-id={testId}
      onClick={(e) => {
        onClick(e);
        e.stopPropagation();
      }}
      type={handlerType}
      disabled={disabled}
      className={`${type} ${stylesClass}`}
    >
      {title}
    </PrimaryButtonContainer>
  )
);

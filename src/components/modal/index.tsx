import React, { ReactNode, useEffect, useRef } from 'react';

import { ModalContainer } from '../loader/styled';
import { cross } from '../../constants/svg';
import { ModalMain } from './styled';

export type ModalProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  dataTest: string;
};

export const Modal = ({ title, onClose, children, dataTest = 'booking-modal' }: ModalProps) => {
  return (
    <ModalContainer data-test-id='modal-outer' onClick={onClose}>
      <ModalMain data-test-id={dataTest} onClick={onClose}>
        <p data-test-id='modal-title'>{title}</p>
        <button data-test-id='modal-close-button' type='button' onClick={onClose}>
          {cross}
        </button>
        {children}
      </ModalMain>
    </ModalContainer>
  );
};

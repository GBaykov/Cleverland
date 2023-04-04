import { FC, useCallback, useEffect } from 'react';
import { CloseSVG } from '../../assets/icons';
import { utilsSlice } from '../../store/reducers/utils-reducer';

import { CloseButton, Container, ToastInfo } from './styled';
import { getToastStyles } from './toast.utils';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const Toast: FC = () => {
  const { toast } = useAppSelector((state) => state.UtilsReducer);
  const dispatch = useAppDispatch();
  const { icon: Icon, styledComponent: Component } = getToastStyles(toast?.toastVariant);
  const { hideToast } = utilsSlice.actions;

  const onClose = useCallback(() => {
    dispatch(hideToast());
    // dispatch(resetBooking());
    // dispatch(hideCommentToast());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => onClose(), 3000);
  }, [dispatch, onClose]);

  return (
    <Container isActive={!!toast}>
      <Component data-test-id='error'>
        <ToastInfo>
          <Icon />
          <p>{toast?.toastMessage}</p>
        </ToastInfo>
        <CloseButton data-test-id='alert-close' onClick={onClose}>
          <CloseSVG />
        </CloseButton>
      </Component>
    </Container>
  );
};

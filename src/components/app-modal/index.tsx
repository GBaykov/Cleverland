import { FC, SyntheticEvent, useCallback } from 'react';
import { ModalType, utilsSlice } from '../../store/reducers/utils-reducer';
import { BookAmongAllBooks, ChosenBookSuccess } from '../../types/books';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ModalCont, OverlayForModal } from './styled';
import { BookingCalendarModal } from '../calendar-modal';

const ModalComponent: FC<{
  type?: ModalType;
  closeHandler: () => void;
  data?: BookAmongAllBooks | ChosenBookSuccess | null;
  // data?: BookAmongAllBooks | ChosenBookSuccess | CommentDTO | null;
}> = ({ type, closeHandler, data }) => (
  <BookingCalendarModal onClick={closeHandler} data={data as BookAmongAllBooks | ChosenBookSuccess} />
);
// type === ModalType.rating ? (
//   <RatingModal onClick={closeHandler} data={data as CommentDTO} />
// ) : (
//   <BookingCalendarModal onClick={closeHandler} data={data as MainBookDTO | FullBookDTO} />
// );

export const ModalInApp: FC = () => {
  const { modal } = useAppSelector((state) => state.UtilsReducer);
  const { hideModal } = utilsSlice.actions;
  const dispatch = useAppDispatch();
  const closeModal = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  return (
    <OverlayForModal data-test-id='modal-outer' isShow={modal?.isShow || false} onClick={closeModal}>
      <ModalCont onClick={(e: SyntheticEvent) => e.stopPropagation()}>
        <ModalComponent type={modal?.modalType} closeHandler={closeModal} data={modal?.data} />
      </ModalCont>
    </OverlayForModal>
  );
};

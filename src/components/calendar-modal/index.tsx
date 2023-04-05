import { FC, useCallback, useState } from 'react';
import { ModalContainer } from '../loader/styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { BookAmongAllBooks, ChosenBookSuccess } from '../../types/books';
import { authSlice } from '../../store/reducers/auth-reducer';
import { utilsSlice } from '../../store/reducers/utils-reducer';
import { ButtonContainer, CloseButtonContainer, Container, Title } from './styled';
import { CloseSVG } from '../../assets/icons';
import { ButtonType, FormButtonType, PrimaryButton } from '../button/primary-button';

export const BookingCalendarModal: FC<{ onClick: () => void; data?: BookAmongAllBooks | ChosenBookSuccess }> = ({
  onClick,
  data,
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.AuthReducer);
  const userID = user?.id;
  const [selectedDate, setSelectedDay] = useState<Date | null>(
    data?.booking?.dateOrder ? new Date(data?.booking?.dateOrder) : null
  );
  const [isEditOpen, setIsEditOpen] = useState(!!data?.booking);
  const { hideModal } = utilsSlice.actions;

  const titleText = data?.booking ? 'Изменение даты бронирования' : 'Выбор даты бронирования';

  const setSelectedDayHandler = useCallback(
    (value: Date | null) => {
      if (data?.booking) {
        setIsEditOpen(false);
      }
      setSelectedDay(value);
    },
    [data?.booking]
  );

  const onSubmit = useCallback(() => {
    const dateOrder = getDateWithCurrentTimeZone(selectedDate!).toISOString();
    const value: BookingType = {
      order: true,
      dateOrder,
      book: data?.id.toString(),
      customer: userID,
    };

    if (data?.booking) {
      const editedData = { ...value, bookingId: data.booking.id };

      // dispatch(editBooking(editedData));
    } else {
      // dispatch(addBooking(value));
    }
    dispatch(hideModal());
  }, [data?.booking, data?.id, dispatch, selectedDate, userID]);

  const onDelete = useCallback(() => {
    // dispatch(deleteBooking(data?.booking?.id as number));
    dispatch(hideModal());
  }, [data?.booking?.id, dispatch]);

  return (
    <Container data-test-id='booking-modal'>
      <CloseButtonContainer data-test-id='modal-close-button' onClick={onClick}>
        <CloseSVG />
      </CloseButtonContainer>
      <Title data-test-id='modal-title'>{titleText}</Title>

      {/* <Calendar selectDate={setSelectedDayHandler} selectedDate={selectedDate} /> */}
      <ButtonContainer>
        <PrimaryButton
          onClick={onSubmit}
          disabled={!selectedDate || isEditOpen}
          testId='booking-button'
          handlerType={FormButtonType.button}
          title='Забронировать'
          stylesClass={ButtonType.primaryButton}
        />
        {data?.booking && (
          <PrimaryButton
            onClick={onDelete}
            testId='booking-cancel-button'
            handlerType={FormButtonType.button}
            title='отменить бронь'
            stylesClass={ButtonType.secondaryButton}
          />
        )}
      </ButtonContainer>
    </Container>
  );
};

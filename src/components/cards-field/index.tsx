import { MockBooks } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { Card } from '../card';
import { CardsContainer } from './styled';

interface CardsFieldProps {
  isList: boolean;
}

export const CardsField = ({ isList }: CardsFieldProps) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);

  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;
  const books = MockBooks
    ? MockBooks.map((book) => <Card book={book} isList={isList} key={Math.round(Math.random() * 1000)} />)
    : null;
  return (
    <CardsContainer onClick={() => dispatch(toggleMenu(false))} isList={isList}>
      {books}
    </CardsContainer>
  );
};

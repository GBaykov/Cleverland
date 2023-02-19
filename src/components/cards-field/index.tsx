import { HOST } from '../../constants';
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
  const { books } = useAppSelector((state) => state.AllBooksReducer);
  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;

  const allBooks = books ? books.map((book) => <Card book={book} isList={isList} key={book.id} />) : null;
  return (
    <CardsContainer onClick={() => dispatch(toggleMenu(false))} isList={isList}>
      {allBooks}
    </CardsContainer>
  );
};

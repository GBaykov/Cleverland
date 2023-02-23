import { useEffect } from 'react';
import { HOST } from '../../constants';
import { MockBooks } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllBooks } from '../../store/reducers/books-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { Card } from '../card';
import { CardsContainer, Emptymessage } from './styled';

interface CardsFieldProps {
  isList: boolean;
}

export const CardsField = ({ isList }: CardsFieldProps) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { filteredBooks, books, activeName } = useAppSelector((state) => state.AllBooksReducer);
  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;

  useEffect(() => {
    let ignore = false;
    function startFetching() {
      if (!ignore) {
        dispatch(fetchCategories());
        dispatch(fetchAllBooks());
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, [dispatch, activeName]);

  const booksSet = activeName === '' ? books : filteredBooks;
  const allBooks = booksSet ? booksSet.map((book) => <Card book={book} isList={isList} key={book.id} />) : null;

  const outlinedSortedBooks =
    filteredBooks.length === 0 ? (
      <Emptymessage>
        <p>По запросу ничего не найдено</p>
      </Emptymessage>
    ) : (
      allBooks
    );

  return (
    <CardsContainer onClick={() => dispatch(toggleMenu(false))} isList={isList}>
      {outlinedSortedBooks}
    </CardsContainer>
  );
};

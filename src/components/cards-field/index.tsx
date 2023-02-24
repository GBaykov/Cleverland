import { useEffect, useState } from 'react';
import { HOST } from '../../constants';
import { MockBooks } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllBooks } from '../../store/reducers/books-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { AllBooksSuccess } from '../../types/books';
import { Card } from '../card';
import { CardsContainer, Emptymessage } from './styled';

interface CardsFieldProps {
  isList: boolean;
  inputValue: string;
}

export const CardsField = ({ isList, inputValue }: CardsFieldProps) => {
  // const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { filteredBooks, books, activeName, isDESC } = useAppSelector((state) => state.AllBooksReducer);
  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;
  const [sortedBooks, setSortedBooks] = useState(books);

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

  useEffect(() => {
    let sorted: AllBooksSuccess = [...booksSet];
    if (sorted.length >= 1) {
      sorted = sorted.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        }
        if (a.rating < b.rating) {
          return -1;
        }
        if (a.rating === 0) {
          return 1;
        }
        if (a.rating === null) {
          return -1;
        }

        return 0;
      });
      sorted = isDESC ? sorted.reverse() : sorted;
      setSortedBooks(sorted);
    }
  }, [booksSet, isDESC]);

  const requiredBooks = sortedBooks.filter((book) => book.title.toLowerCase().includes(inputValue.toLocaleLowerCase()));

  const allBooks = requiredBooks
    ? requiredBooks.map((book) => <Card book={book} isList={isList} key={book.id} />)
    : null;

  const outlinedSortedBooks =
    (filteredBooks.length === 0 && activeName !== '') || requiredBooks.length < 1 ? (
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

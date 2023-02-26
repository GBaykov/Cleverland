import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../button';
import emptybook from '../../assets/images/emptybook.png';
import {
  CardAuthor,
  CardButton,
  CardButtonWrapper,
  CardContent,
  CardItem,
  CardPhoto,
  CardRating,
  CardTitle,
  PhotoContainer,
} from './styled';
import { CardProps } from '../../types';
import { Stars } from '../stars';
import { StarsContent } from '../stars/styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { bookSlice } from '../../store/reducers/book-reducer';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { HOST } from '../../constants';
import { getTitleWithHighlight } from '../utils/functions';

export const Card = ({ book, isList }: CardProps) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { inputValue } = useAppSelector((state) => state.AllBooksReducer);

  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;
  const { bookId, currentBook } = useAppSelector((state) => state.BookReducer);
  const { setBookId } = bookSlice.actions;

  const ratingStars = (rating: number | undefined) => {
    if (rating) {
      return <Stars rating={rating} />;
    }
    return <StarsContent>Еще нет оценок</StarsContent>;
  };
  const navigate = useNavigate();
  const location = useLocation();

  const onBookClick = () => {
    navigate(`${location.pathname}/${book.id}`);
    dispatch(setBookId(book.id));
    dispatch(toggleMenu(false));
  };

  const bookTitle = () =>
    inputValue === '' ? (
      <CardTitle isList={isList}>{book.title}</CardTitle>
    ) : (
      <CardTitle isList={isList} dangerouslySetInnerHTML={{ __html: getTitleWithHighlight(inputValue, book.title) }} />
    );

  if (book) {
    const bookphoto = `${HOST}${book?.image?.url}`;
    return (
      <CardContent data-test-id='card' onClick={() => onBookClick()} isList={isList}>
        {bookphoto ? <CardPhoto isList={isList} src={bookphoto} alt='bookphoto' /> : <PhotoContainer isList={isList} />}

        <CardItem isList={isList}>
          {isList ? null : <CardRating>{ratingStars(book.rating)}</CardRating>}
          {/* <CardTitle isList={isList}>{book.title}</CardTitle> */}
          {bookTitle()}
          <CardAuthor isList={isList}>{book.authors}</CardAuthor>
          <CardButtonWrapper isList={isList}>
            {isList ? <CardRating>{ratingStars(book.rating)}</CardRating> : null}
            <CardButton isList={isList}>
              <Button isPrimary={true} height={40} text='Забронировать' />
            </CardButton>
          </CardButtonWrapper>
        </CardItem>
      </CardContent>
    );
  }
  return null;
};

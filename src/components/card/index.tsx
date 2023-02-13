import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../button';
import emptybook from '../../assets/images/emptybook.png';
import {
  CardAuthor,
  CardButton,
  CardButtonWrapper,
  CardContent,
  CardItem,
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

export const Card = ({ book, isList }: CardProps) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);

  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;
  const { bookId } = useAppSelector((state) => state.BookReducer);
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

  const photo = book.photo ? book.photo[0] : '';
  return (
    <CardContent data-test-id='card' onClick={() => onBookClick()} isList={isList}>
      <PhotoContainer bookphoto={photo} isList={isList} />
      <CardItem isList={isList}>
        {isList ? null : <CardRating>{ratingStars(book.rating)}</CardRating>}
        <CardTitle isList={isList}>{book.name}</CardTitle>
        <CardAuthor isList={isList}>{book.author}</CardAuthor>
        <CardButtonWrapper isList={isList}>
          {isList ? <CardRating>{ratingStars(book.rating)}</CardRating> : null}
          <CardButton isList={isList}>
            <Button isPrimary={true} height={40} text='Забронировать' />
          </CardButton>
        </CardButtonWrapper>
      </CardItem>
    </CardContent>
  );
};

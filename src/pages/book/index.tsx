import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/button';
import { Stars } from '../../components/stars';
import { EmptyStars } from '../../components/stars/empty-stars';
import { MockBook2, MockBooks } from '../../constants/constants';
import {
  BookAuthor,
  BookDetailsContainer,
  BookDetailsInfo,
  BookMainBlock,
  BookMainButton,
  BookMainDiscription,
  BookMainInfo,
  BookPageAddress,
  BookPageContainer,
  BookPageContent,
  // BookPhoto,
  BookRatingBlock,
  BookTitle,
  Feedback,
  FeedbackContainer,
  Feedbacks,
  FeedbackTitle,
  RelativeBook,
  ReviewButton,
} from './styled';
import profile from '../../assets/images/profile.jpg';
import { ArrowRolled } from '../../components/meny/styled';
import { arrow } from '../../constants/svg';
import { Slider } from '../../components/slider';
import { BurgerMenu } from '../../components/meny/burger-menu';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menu-reducer';

const book = MockBooks[1];

export const BookPage = () => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();
  const [isRolled, setIsRolled] = useState(false);
  const location = useLocation();
  const book = MockBooks[+location.pathname.split('/').reverse()[0]];
  return (
    <RelativeBook>
      <BurgerMenu />
      <BookPageContainer onClick={() => dispatch(toggleMenu(false))}>
        <BookPageAddress>
          <span>Бизнес книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытсвующих </span>
        </BookPageAddress>
        <BookPageContent>
          <BookMainBlock>
            {/* <BookPhoto bookphoto={book.photo} /> */}
            <Slider images={book.photo} />
            <BookMainInfo>
              <BookTitle>{book.name}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
              <BookMainButton>
                <Button isPrimary={true} height={40} text='Забронировать' />
              </BookMainButton>
            </BookMainInfo>
            <BookMainDiscription>
              <p>О книге</p>
              <div>{book.description}</div>
            </BookMainDiscription>
          </BookMainBlock>
          <BookRatingBlock>
            <p>Рейтинг</p>
            <div>
              {book.rating ? <Stars rating={book.rating} /> : <EmptyStars />}

              {book.rating ? <span>{book.rating}</span> : <p>ещё нет оценок</p>}
            </div>
          </BookRatingBlock>
          <BookDetailsContainer>
            <p>Подробная информация</p>
            <BookDetailsInfo>
              <div>
                <div>
                  <p>Издательство</p>
                  <p>Год издания</p>
                  <p>Страниц</p>
                  <p>Переплет</p>
                  <p>Формат</p>
                </div>

                <div>
                  <span>{book.details.publishing}</span>
                  <span>{book.details.year}</span>
                  <span>{book.details.pages}</span>
                  <span>{book.details.binding}</span>
                  <span>{book.details.format}</span>
                </div>
              </div>

              <div>
                {' '}
                <div>
                  <p>Жанр</p>
                  <p>Вес</p>
                  <p>ISBN</p>
                  <p>Изготовитель</p>
                </div>
                <div>
                  <span>{book.details.genre}</span>
                  <span>{book.details.weight} г</span>
                  <span>{book.details.ISBN}</span>
                  <span>{book.details.manufacturer}</span>
                </div>
              </div>
            </BookDetailsInfo>
          </BookDetailsContainer>
          <FeedbackContainer>
            <FeedbackTitle>
              <span>Отзывы {book.reviews ? book.reviews.length : 0}</span>
              <ArrowRolled
                data-test-id='button-hide-reviews'
                isRolled={isRolled}
                onClick={() => setIsRolled(!isRolled)}
              >
                {arrow}{' '}
              </ArrowRolled>
            </FeedbackTitle>
            <Feedbacks isRolled={isRolled}>
              {book.reviews?.map((review) => (
                <Feedback key={review.username}>
                  <div>
                    <img src={profile} alt='' />
                    <p>
                      <span>{review.username}</span>
                      <span>{review.date}</span>
                    </p>
                  </div>
                  <Stars rating={review.rating} />
                  <p>{review.comment}</p>
                </Feedback>
              ))}
            </Feedbacks>
            <ReviewButton>
              <Button data-test-id='button-rating' isPrimary={true} text='Оценить книгу' />
            </ReviewButton>
          </FeedbackContainer>
        </BookPageContent>
      </BookPageContainer>
    </RelativeBook>
  );
};

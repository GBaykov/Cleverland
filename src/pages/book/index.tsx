import { useEffect, useState } from 'react';
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
import { fetchOneBook } from '../../store/reducers/book-reducer';

export const BookPage = () => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { currentBook } = useAppSelector((state) => state.BookReducer);
  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();
  const [isRolled, setIsRolled] = useState(false);
  const location = useLocation();
  const bookId = +location.pathname.split('/').reverse()[0];

  useEffect(() => {
    dispatch(fetchOneBook(bookId));
  }, [dispatch, bookId]);

  return (
    <RelativeBook>
      <BurgerMenu />
      <BookPageContainer onClick={() => dispatch(toggleMenu(false))}>
        <BookPageAddress>
          <span>Бизнес книги / {currentBook?.title} </span>
        </BookPageAddress>
        <BookPageContent>
          <BookMainBlock>
            {/* <BookPhoto bookphoto={book.photo} /> */}
            <Slider images={currentBook?.images} />
            <BookMainInfo>
              <BookTitle>{currentBook?.title}</BookTitle>
              <BookAuthor>{currentBook?.authors}</BookAuthor>
              <BookMainButton>
                <Button isPrimary={true} height={40} text='Забронировать' />
              </BookMainButton>
            </BookMainInfo>
            <BookMainDiscription>
              <p>О книге</p>
              <div>{currentBook?.description}</div>
            </BookMainDiscription>
          </BookMainBlock>
          <BookRatingBlock>
            <p>Рейтинг</p>
            <div>
              {currentBook?.rating ? <Stars rating={currentBook?.rating} /> : <EmptyStars />}

              {currentBook?.rating ? <span>{currentBook?.rating}</span> : <p>ещё нет оценок</p>}
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
                  <span>{currentBook?.publish}</span>
                  <span>{currentBook?.issueYear}</span>
                  <span>{currentBook?.pages}</span>
                  <span>{currentBook?.cover}</span>
                  <span>{currentBook?.format}</span>
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
                  <span>{currentBook?.categories}</span>
                  <span>{currentBook?.weight} г</span>
                  <span>{currentBook?.ISBN}</span>
                  <span>{currentBook?.producer}</span>
                </div>
              </div>
            </BookDetailsInfo>
          </BookDetailsContainer>
          <FeedbackContainer>
            <FeedbackTitle>
              <span>Отзывы {currentBook?.comments ? currentBook?.comments.length : 0}</span>
              <ArrowRolled
                data-test-id='button-hide-reviews'
                isRolled={isRolled}
                onClick={() => setIsRolled(!isRolled)}
              >
                {arrow}{' '}
              </ArrowRolled>
            </FeedbackTitle>
            <Feedbacks isRolled={isRolled}>
              {currentBook?.comments?.map((comment) => (
                <Feedback key={comment.id}>
                  <div>
                    <img src={comment.user.avatarUrl} alt='' />
                    <p>
                      <span>
                        {comment.user.firstName} {comment.user.lastName}
                      </span>
                      <span>{comment.createdAt}</span>
                    </p>
                  </div>
                  <Stars rating={comment.rating} />
                  <p>{comment.text}</p>
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

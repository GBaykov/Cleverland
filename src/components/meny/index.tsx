import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AdditionalLinks,
  ArrowRolled,
  Booklist,
  BookListHead,
  BooksContent,
  BooksLink,
  MenyContent,
  StyledLink,
} from './styled';
import { categories } from '../../constants/constants';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { arrow } from '../../constants/svg';
import { BurgerMenu } from './burger-menu';
import { bookSlice } from '../../store/reducers/book-reducer';

export const Meny: FC = () => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);

  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();
  const { bookId } = useAppSelector((state) => state.BookReducer);
  const { setBookId } = bookSlice.actions;

  const [isRolled, setIsRolled] = useState(false);
  const [activeLink, setActiveLink] = useState('books');
  const [activeCategory, setActiveCategory] = useState('');

  const onArrowRolledClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setIsRolled(!isRolled);
    setActiveLink('books');
  };
  const onBookCategoryClick = (category: string) => {
    setActiveLink('books');
    setActiveCategory(category);
  };
  const onLinckClick = (str: string) => {
    setActiveLink(str);
    setIsRolled(true);
  };

  const onMenuClick = () => {
    dispatch(toggleMenu(!isMenuOpen));
    console.log(bookId);
  };

  return (
    <>
      <MenyContent bookId={bookId} onClick={() => onMenuClick()} className={isMenuOpen ? 'active' : ''}>
        <BooksContent>
          <Booklist>
            <BookListHead
              data-test-id='navigation-showcase'
              onClick={(e) => onArrowRolledClick(e)}
              className={activeLink === 'books' ? 'activeLink' : ''}
            >
              <span>Витрина книг</span>
              <ArrowRolled isRolled={isRolled}>{arrow} </ArrowRolled>
            </BookListHead>

            <BooksLink
              data-test-id='navigation-books'
              onClick={() => onBookCategoryClick('all')}
              key={0}
              className={isRolled ? 'rolled' : ''}
            >
              <Link to='/books/all' className={activeCategory === 'all' && activeLink === 'books' ? 'activeCat' : ''}>
                Все книги
              </Link>
            </BooksLink>

            {categories.map((category) => (
              <BooksLink
                onClick={() => onBookCategoryClick(category.link)}
                key={category.id}
                className={isRolled ? 'rolled' : ''}
              >
                <Link
                  to={`/books/${category.link}`}
                  className={activeCategory === category.link && activeLink === 'books' ? 'activeCat' : ''}
                >
                  {category.content} <span>{category.count}</span>
                </Link>
              </BooksLink>
            ))}
          </Booklist>
        </BooksContent>

        <StyledLink
          data-test-id='navigation-terms'
          onClick={() => onLinckClick('terms')}
          to='/terms'
          className={activeLink === 'terms' ? 'activeLink' : ''}
        >
          Правила пользования
        </StyledLink>

        <StyledLink
          data-test-id='navigation-contract'
          onClick={() => onLinckClick('contract')}
          to='/contract'
          className={activeLink === 'contract' ? 'activeLink' : ''}
        >
          Договор оферты
        </StyledLink>
        <AdditionalLinks>
          <StyledLink
            onClick={() => setActiveLink('profile')}
            to='/profile'
            className={activeLink === 'profile' ? 'activeLink' : ''}
          >
            Профиль
          </StyledLink>

          <StyledLink
            onClick={() => setActiveLink('exit')}
            to='/exit'
            className={activeLink === 'exit' ? 'activeLink' : ''}
          >
            Выход
          </StyledLink>
        </AdditionalLinks>
      </MenyContent>
      <BurgerMenu />
    </>
  );
};

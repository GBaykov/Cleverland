import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

import { menuSlice } from '../../store/reducers/menu-reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { arrow } from '../../constants/svg';
import { BurgerMenu } from './burger-menu';
import { Category } from '../../types/categories';
import { fetchCategories } from '../../store/reducers/categories-reducer';

export const Meny: FC = () => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);

  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();
  const { bookId } = useAppSelector((state) => state.BookReducer);

  const [isRolled, setIsRolled] = useState(false);
  const [activeLink, setActiveLink] = useState('books');
  const [activeCategory, setActiveCategory] = useState('all');
  const { categories, categoryStatus } = useAppSelector((state) => state.CategoriesReducer);
  const { currentBook, currentBookStatus } = useAppSelector((state) => state.BookReducer);
  const { booksStatus } = useAppSelector((state) => state.AllBooksReducer);

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
              {categoryStatus === 'idle' && booksStatus === 'idle' && currentBookStatus === 'idle' && (
                <ArrowRolled isRolled={isRolled}>{arrow} </ArrowRolled>
              )}
            </BookListHead>
            {categoryStatus === 'idle' && booksStatus === 'idle' && currentBookStatus === 'idle' && (
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
            )}

            {categoryStatus === 'idle' &&
              booksStatus === 'idle' &&
              currentBookStatus === 'idle' &&
              categories &&
              categories.map((category) => (
                <BooksLink
                  onClick={() => onBookCategoryClick(category.path)}
                  key={category.id}
                  className={isRolled ? 'rolled' : ''}
                >
                  <Link
                    to={`/books/${category.path}`}
                    className={activeCategory === category.path && activeLink === 'books' ? 'activeCat' : ''}
                  >
                    {category.name}
                    {/* <span>{category.count}</span> */}
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

import { FC, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AdditionalLinks,
  ArrowRolled,
  BurgerBooklist,
  BurgerBookListHead,
  BurgerBooksContent,
  BurgerBooksLink,
  BurgerMenyContent,
  BurgerStyledLink,
} from './styled';
import { menuSlice } from '../../../store/reducers/menu-reducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { arrow } from '../../../constants/svg';
import { allBooksSlice } from '../../../store/reducers/books-reducer';
import { authSlice } from '../../../store/reducers/auth-reducer';

export const BurgerMenu: FC = () => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;
  const { setActiveCategory, setActiveName } = allBooksSlice.actions;
  const [isRolled, setIsRolled] = useState(false);
  const [activeLink, setActiveLink] = useState('books');

  const { categories, categoryStatus } = useAppSelector((state) => state.CategoriesReducer);
  const { currentBook, currentBookStatus } = useAppSelector((state) => state.BookReducer);
  const { books, booksStatus, activeCategory } = useAppSelector((state) => state.AllBooksReducer);

  const onArrowRolledClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setIsRolled(!isRolled);
    setActiveLink('books');
  };
  const onBookCategoryClick = (category: string, categoryname: string) => {
    setActiveLink('books');
    dispatch(setActiveCategory(category));
    dispatch(setActiveName(categoryname));
  };
  const onLinckClick = (str: string) => {
    setActiveLink(str);
    setIsRolled(true);
  };
  const { logOut } = authSlice.actions;
  const navigate = useNavigate();
  const hendleExitClick = () => {
    navigate('/auth');
    dispatch(logOut());
    setActiveLink('auth');
  };

  return (
    <BurgerMenyContent
      onClick={() => dispatch(toggleMenu(false))}
      data-test-id='burger-navigation'
      className={isMenuOpen ? 'active' : ''}
    >
      <BurgerBooksContent>
        <BurgerBooklist>
          <BurgerBookListHead
            data-test-id='burger-showcase'
            onClick={(e) => onArrowRolledClick(e)}
            className={activeLink === 'books' ? 'activeLink' : ''}
          >
            <span>Витрина книг</span>
            {categoryStatus === 'idle' && booksStatus === 'idle' && currentBookStatus === 'idle' && (
              <ArrowRolled isRolled={isRolled}>{arrow} </ArrowRolled>
            )}
          </BurgerBookListHead>
          {categoryStatus === 'idle' && booksStatus === 'idle' && currentBookStatus === 'idle' && (
            <BurgerBooksLink
              // data-test-id='burger-books'
              onClick={() => onBookCategoryClick('all', '')}
              key={0}
              className={isRolled ? 'rolled' : ''}
            >
              <Link
                data-test-id='burger-books'
                to='/books/all'
                className={activeCategory === 'all' && activeLink === 'books' ? 'activeCat' : ''}
              >
                Все книги
              </Link>
            </BurgerBooksLink>
          )}

          {categoryStatus === 'idle' &&
            booksStatus === 'idle' &&
            currentBookStatus === 'idle' &&
            categories &&
            categories.map((category) => {
              const booksInCategory = books.filter((item, index) => item.categories.includes(category.name)).length;

              return (
                <BurgerBooksLink
                  onClick={() => onBookCategoryClick(category.path, category.name)}
                  key={category.id}
                  className={isRolled ? 'rolled' : ''}
                >
                  <Link
                    data-test-id={`burger-${category.path}`}
                    to={`/books/${category.path}`}
                    className={activeCategory === category.path && activeLink === 'books' ? 'activeCat' : ''}
                  >
                    {category.name}
                  </Link>
                  <span data-test-id={`burger-book-count-for-${category.path}`}> {booksInCategory}</span>
                </BurgerBooksLink>
              );
            })}
        </BurgerBooklist>
      </BurgerBooksContent>

      <BurgerStyledLink
        data-test-id='burger-terms'
        onClick={() => onLinckClick('terms')}
        to='/terms'
        className={activeLink === 'terms' ? 'activeLink' : ''}
      >
        Правила пользования
      </BurgerStyledLink>

      <BurgerStyledLink
        data-test-id='burger-contract'
        onClick={() => onLinckClick('contract')}
        to='/contract'
        className={activeLink === 'contract' ? 'activeLink' : ''}
      >
        Договор оферты
      </BurgerStyledLink>
      <AdditionalLinks>
        <BurgerStyledLink
          onClick={() => setActiveLink('profile')}
          to='/profile'
          className={activeLink === 'profile' ? 'activeLink' : ''}
        >
          Профиль
        </BurgerStyledLink>

        <BurgerStyledLink
          onClick={() => hendleExitClick()}
          to='/auth'
          className={activeLink === 'exit' ? 'activeLink' : ''}
        >
          Выход
        </BurgerStyledLink>
      </AdditionalLinks>
    </BurgerMenyContent>
  );
};

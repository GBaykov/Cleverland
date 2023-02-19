import { FC, ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Loader } from '../../components/loader';
import { NotificationError } from '../../components/utils/notification-error';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllBooks } from '../../store/reducers/books-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { App } from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { toggleMenu } = menuSlice.actions;
  const { booksStatus } = useAppSelector((store) => store.AllBooksReducer);
  const { categoryStatus } = useAppSelector((store) => store.CategoriesReducer);
  const { currentBookStatus } = useAppSelector((store) => store.BookReducer);

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
  }, [dispatch]);

  return (
    <>
      {(categoryStatus === 'loading' || booksStatus === 'loading' || currentBookStatus === 'loading') && <Loader />}
      {(categoryStatus === 'faild' || booksStatus === 'faild' || currentBookStatus === 'faild') && (
        <NotificationError text='Что-то пошло не так. Обновите страницу через некоторое время.' />
      )}

      <App className={isMenuOpen ? 'menuOpen' : ''}>
        <Header />
        <Outlet />
        {children}
        <Footer />
      </App>
    </>
  );
};

import { FC, ReactNode, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllBooks } from '../../store/reducers/books-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';

import { App } from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const dispatch = useAppDispatch();
  const { activeName } = useAppSelector((state) => state.AllBooksReducer);
  const { user, token } = useAppSelector((state) => state.AuthReducer);

  useEffect(() => {
    let ignore = false;
    function startFetching() {
      if (!ignore) {
        dispatch(fetchAllBooks());
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, [dispatch, activeName]);

  useEffect(() => {
    let ignore = false;
    function startFetching() {
      if (!ignore) {
        dispatch(fetchCategories());
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [dispatch, activeName]);

  return user ? (
    <App className={isMenuOpen ? 'menuOpen' : ''}>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </App>
  ) : (
    <Navigate to='/auth' />
  );
};

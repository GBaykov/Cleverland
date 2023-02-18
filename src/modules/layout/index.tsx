import { FC, ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Meny } from '../../components/meny';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllBooks } from '../../store/reducers/books-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { App } from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);

  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;

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
    <App className={isMenuOpen ? 'menuOpen' : ''}>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </App>
  );
};

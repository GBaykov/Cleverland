import { FC, ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Loader } from '../../components/loader';
import { NotificationError } from '../../components/notifications/notification-error';
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
    <>
      {/* <Loader /> */}
      <NotificationError text='Что-то пошло не так. Обновите страницу через некоторое время.' />
      <App className={isMenuOpen ? 'menuOpen' : ''}>
        <Header />
        <Outlet />
        {children}
        <Footer />
      </App>
    </>
  );
};

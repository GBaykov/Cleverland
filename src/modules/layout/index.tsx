import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Meny } from '../../components/meny';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { App } from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);

  const dispatch = useAppDispatch();
  const { toggleMenu } = menuSlice.actions;
  return (
    <App className={isMenuOpen ? 'menuOpen' : ''}>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </App>
  );
};

import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import { useAppSelector } from '../../hooks/redux';

import { App } from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);

  return (
    <App className={isMenuOpen ? 'menuOpen' : ''}>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </App>
  );
};

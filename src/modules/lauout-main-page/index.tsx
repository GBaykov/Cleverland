import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Meny } from '../../components/meny';
import { LayoutMainPageContent } from './styled';

type LayoutMainPageProps = {
  children: ReactNode;
};

export const LayoutMainPage: FC<LayoutMainPageProps> = ({ children }) => (
  <LayoutMainPageContent>
    <Meny />
    <Outlet />
    {children}
  </LayoutMainPageContent>
);

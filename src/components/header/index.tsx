import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoico from '../../assets/icons/logoico.svg';
import profile from '../../assets/images/profile.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { Bar, ContainerHeader, ContainerLogo, HeaderAccount, HeaderContent, HeaderMain, MenuButton } from './styled';

export const Header: FC = () => {
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('Иван');
  const navigate = useNavigate();

  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(toggleMenu(!isMenuOpen));
  };

  return (
    <ContainerHeader onClick={() => dispatch(toggleMenu(false))}>
      <HeaderContent>
        <ContainerLogo onClick={() => navigate('/')}>
          <img src={logoico} alt='logotype of Clevertec' />
          <p>Cleverland</p>
        </ContainerLogo>
        <HeaderMain>
          <MenuButton
            data-test-id='button-burger'
            className={isMenuOpen ? 'active' : ''}
            aria-label='Открыть главное меню'
            onClick={(e) => onBtnClick(e)}
          >
            <Bar />
            <Bar />
            <Bar />
          </MenuButton>
          <p>Библиотека</p>
          <HeaderAccount>
            <p> Привет, {username}!</p>
            <a href=''>
              <img src={profile} alt='Profile' />
            </a>
          </HeaderAccount>
        </HeaderMain>
      </HeaderContent>
    </ContainerHeader>
  );
};

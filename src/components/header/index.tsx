import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoico from '../../assets/icons/logoico.svg';
import profile from '../../assets/images/profile.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/auth-reducer';
import { menuSlice } from '../../store/reducers/menu-reducer';
import {
  Bar,
  ContainerHeader,
  ContainerLogo,
  HeaderAccount,
  HeaderContent,
  HeaderMain,
  MenuButton,
  UserItem,
  UserList,
  UserMeny,
} from './styled';

export const Header: FC = () => {
  const [isLittleMeny, setIsLittleMeny] = useState(false);
  const { isMenuOpen } = useAppSelector((state) => state.MenuReducer);
  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();
  const { logOut } = authSlice.actions;

  const [username, setUsername] = useState('Иван');
  const navigate = useNavigate();

  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(toggleMenu(!isMenuOpen));
  };

  const headClassname = () => {
    if (isLittleMeny) {
      return 'active';
    }
    return '';
  };
  const hendleExitClick = () => {
    navigate('/auth');
    dispatch(logOut());
  };
  return (
    <ContainerHeader className={headClassname()} onClick={() => dispatch(toggleMenu(false))}>
      <HeaderContent>
        <ContainerLogo>
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
          <HeaderAccount onClick={() => setIsLittleMeny(!isLittleMeny)}>
            <p> Привет, {username}!</p>
            <span>
              <img src={profile} alt='Profile' />
            </span>
          </HeaderAccount>
          {isLittleMeny && (
            <UserMeny>
              <UserList>
                <UserItem>Профиль</UserItem>
                <UserItem onClick={() => hendleExitClick()} role='presentation'>
                  Выйти
                </UserItem>
              </UserList>
            </UserMeny>
          )}
        </HeaderMain>
      </HeaderContent>
    </ContainerHeader>
  );
};

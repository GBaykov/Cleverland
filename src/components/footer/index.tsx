import { FC } from 'react';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import vk from '../../assets/icons/vk.svg';
import * as Styled from './styled';

export const Footer: FC = () => (
  <Styled.ContainerFooter>
    <Styled.FooterContent>
      <Styled.Copyright>© 2020-2023 Cleverland. Все права защищены.</Styled.Copyright>
      <Styled.IconContainer>
        <a href='https://rs.school/react/' target='_blank' rel='noreferrer'>
          <img src={facebook} alt='facebook icon' />
        </a>
        <a href='https://rs.school/react/' target='_blank' rel='noreferrer'>
          <img src={instagram} alt='instagram icon' />
        </a>
        <a href='https://rs.school/react/' target='_blank' rel='noreferrer'>
          <img src={linkedin} alt='linkedin icon' />
        </a>
        <a href='https://rs.school/react/' target='_blank' rel='noreferrer'>
          <img src={vk} alt='vk icon' />
        </a>
      </Styled.IconContainer>
    </Styled.FooterContent>
  </Styled.ContainerFooter>
);

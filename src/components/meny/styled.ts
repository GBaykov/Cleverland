import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DARK, GREY, HOVER, PRESSED, textColorTool, ACCENT, BLACK5, BLACK20 } from '../../constants/styles';
import { ContainerFooter } from '../footer/styled';
import { ContainerHeader } from '../header/styled';

interface MenuProps {
  bookId: number | null;
}
export const MenyContent = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  min-width: 279px;
  ${({ bookId }) => (bookId != null ? `display:none` : '')}

  &.active {
    background: ${HOVER};
    ${textColorTool};
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }

  @media (max-width: 1100px) {
    display: none;
    // position: absolute;
    // top: ${ContainerHeader.height};
    // max-height: 100%;
    // overflow: scroll;
    // left: 64px;
    // transform: translateX(-566px);
    // width: 502px;
    // padding: 32px 0px 52px;

    // &.active {
    //   transform: translateX(0);
    //   margin-left: 0;
    //   transition: all 0.2s ease;
    //   display: flex;
    //   -webkit-background-clip: content-box;
    //   -webkit-text-fill-color: inherit;
    //   background-clip: text;
    //   text-fill-color: inherit;
    //   box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    //     0px 1px 5px rgba(191, 196, 201, 0.24);
    //   border-radius: 10px;
    //   background: ${BLACK5};
    //   z-index: 3;
    // }
  }

  @media (max-width: 600px) {
    left: 16px;
    transform: translateX(-304px);
    width: 288px;
  }

  > a {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    letter-spacing: 0.1px;
    margin-bottom: 42px;

    :first-child {
      margin-bottom: 0;
    }
    :last-child {
      margin-bottom: 0;
    }

    background: ${DARK};
    color: ${DARK};
    ${textColorTool};

    :hover {
      background: ${ACCENT};
      ${textColorTool};
    }
    :active {
      background: ${PRESSED};
      ${textColorTool};
    }
  }
`;

export const BooksContent = styled.div`
  margin-bottom: 42px;
  @media (max-width: 1100px) {
    margin-left: 32px;
  }
  @media (max-width: 600px) {
    margin-left: 16px;
  }
`;

export const Booklist = styled.ul`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  li {
    margin-bottom: 16px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const BooksLink = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1px;
  list-style-type: none;
  max-width: 250px;

  color: ${DARK};
  background: ${DARK};
  ${textColorTool};

  span {
    color: ${GREY};
    background: ${GREY};
    ${textColorTool}
    font-size: 14px;
  }

  :hover {
    background: ${ACCENT};
    ${textColorTool};
  }
  :active {
    background: ${PRESSED};
    ${textColorTool};
  }

  a {
    &.activeCat {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.1px;
      background: ${HOVER};
      ${textColorTool};
    }
  }

  &.active {
    background: ${HOVER};
    ${textColorTool};
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  &.rolled {
    display: none;
  }
`;

export const BookListHead = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -20px;
  margin-bottom: 16px;
  max-width: 250px;
  position: relative;

  svg {
    fill: ${DARK};
  }

  &.activeLink {
    span {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      background: ${HOVER};
      ${textColorTool};
    }

    padding-bottom: 8px;
    width: 255px;
    svg {
      fill: url(#paint0_linear_14233_29395);
      shape-rendering: crispEdges;
    }
    :after {
      content: '';
      background: ${HOVER};
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  letter-spacing: 0.1px;

  :last-child {
    margin-bottom: 0;
  }

  background: ${DARK};
  color: ${DARK};
  ${textColorTool};

  :hover {
    background: ${ACCENT};
    ${textColorTool};
  }
  :active {
    background: ${PRESSED};
    ${textColorTool};
  }

  ${Booklist}:hover & {
    span {
      background: ${ACCENT};
      ${textColorTool};
    }
  }
`;
export const StyledLink = styled(Link)`
  max-width: 250px;
  position: relative;
  @media (max-width: 1100px) {
    margin-left: 32px;
  }
  @media (max-width: 600px) {
    margin-left: 16px;
  }
  &.activeLink {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    background: ${HOVER};
    ${textColorTool};
    display: block;
    padding-bottom: 8px;
    width: 255px;
    :after {
      content: '';
      background: ${HOVER};
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }
`;

interface ArrowRolledProps {
  isRolled: boolean;
}
export const ArrowRolled = styled.span<ArrowRolledProps>`
  svg {
    margin-right: 17px;
  }
  ${({ isRolled }) => (isRolled ? `` : 'transform: rotate(180deg); svg{margin-right: 0;  margin-left: 17px;} ')}
`;

export const AdditionalLinks = styled.div`
  display: none;
  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 0 0px;
    justify-content: space-between;
    border-top: 1px solid ${BLACK20};
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;

    a {
      :first-child {
        margin-bottom: 42px;
      }
    }
  }
  @media (max-width: 600px) {
  }
`;

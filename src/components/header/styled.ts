import styled from 'styled-components';
import { DARK, HOVER, PRESSED } from '../../constants/styles';

export const ContainerHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  // position: sticky;
  top: 0;
  width: 100%;
  height: 105px;
  padding: 32px 11.45% 15px;
  @media (max-width: 800px) {
    height: 94px;
    padding: 32px 8.33% 22px;
  }
  @media (max-width: 500px) {
    height: 76px;
    padding: 24px 16px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;

export const ContainerLogo = styled.a`
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  verticale-align: center;
  
  :hover{
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    display: none;
  }

  p {
    margin-left: 8px;
    color: ${DARK}
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 125%x;
letter-spacing: 0.1px;
  }

img {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 5px;
    background-color: #6E76F1;
}
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1100px) {
    justify-content: flex-start;
  }

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 125%;
    letter-spacing: 0.1px;
    color: ${DARK};
    vertical-align: center;
  }
`;
export const MenuButton = styled.button`
  display: none;

  float: left;
  margin-right: 26.67px;
  outline: 0;
  border: 0;
  padding: 6.67px 2.67px 0px;
  background: none;

  @media (max-width: 1100px) {
    display: block;
  }

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover {
    cursor: pointer;
  }
  :hover span {
    background: ${HOVER};
  }
  :active span {
    background: ${PRESSED};
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(8.3px, 7px);
      width: 22.67px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(4.2px, -3px);
      width: 22.67px;
    }
  }
`;

export const Bar = styled.span`
  display: block;
  width: 22.67px;
  height: 2.67px;
  margin-bottom: 5.33px;
  background-color: ${DARK};
`;

export const HeaderAccount = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 129%;
    text-align: right;
    letter-spacing: 0.1px;
    margin-right: 16px;
  }

  a img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

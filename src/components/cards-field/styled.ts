import styled from 'styled-components';
import { BLACK40 } from '../../constants/styles';

type CardsContainerProps = {
  isList: boolean;
};

export const CardsContainer = styled.section<CardsContainerProps>`
  width: 100%;

  //   width: 825px;
  display: flex;
  gap: 16px;

  ${({ isList }) =>
    isList
      ? `{
        gap: 16px;
        flex-direction: column;
        
  }`
      : `{
        gap: 21.5px;
    flex-direction: row;
    flex-wrap: wrap;
    @media(max-width: 768px){
      gap: 35px;
    }
    @media(max-width: 680px){
      gap: 15px;
    }
    @media(max-width: 630px){
      justify-content: center;
    }
  }`};
`;

export const Emptymessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.1px;
    color: ${BLACK40};
    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

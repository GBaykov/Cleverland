import styled from 'styled-components';

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

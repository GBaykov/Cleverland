import styled from 'styled-components';
import cat from '../../assets/icons/cat.svg';
import emptybook from '../../assets/images/emptybook.png';
import { BLACK40, BLACK5, BLACK70, DARK } from '../../constants/styles';

interface CardContentProps {
  isList: boolean;
}

export const CardContent = styled.div<CardContentProps>`
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 12px;
  display: flex;
  gap: 16px;
  :hover {
    cursor: pointer;
  }

  ${({ isList }) =>
    isList
      ? `flex-direction: row; 
         width: 100%; 
         max-width: 825px; 
         padding: 24px 24px 24px 16px;
         @media(max-width:768px){
          padding: 16px 24px 16px 16px;
         }
         @media(max-width:500px){
          padding: 16px 16px 16px 8px;
          gap: 8px;
         }`
      : `flex-direction: column;  
         width: 190px; 
         padding: 8px 8px 16px 8px;

         @media(max-width:500px){
      
          gap: 8px;
          img {
            display: inline-block;
            margi: 0 auto;
          }
         }
         @media(max-width:370px){
          padding: 8px 16px 16px;
           width: 100%;
         }
         `};
`;

interface PhotoContainerProps {
  bookphoto?: string;
  isList: boolean;
}

export const CardPhoto = styled.img<PhotoContainerProps>`
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  flex-shrink: 0;
  align-self: center;
  ${({ isList }) =>
    isList
      ? `  width: 120px;
    height: 170px;
    @media(max-width: 400px){
      width: 70px;
    height: 100px;
    }
    `
      : `  width: 174px;
    height: 242px;
    `};
`;

export const PhotoContainer = styled.p<PhotoContainerProps>`
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  flex-shrink: 0;
  align-self: center;

  ${({ isList }) =>
    isList
      ? `  width: 120px;
    height: 170px;
    @media(max-width: 400px){
      width: 70px;
    height: 100px;
    }
    `
      : `  width: 174px;
    height: 242px;
    `};

  background: ${BLACK5}  no-repeat center url(${cat};;
`;
// img {
//   ${({ isList }) =>
//     isList
//       ? `  width: 120px;
//   height: 170px;
//   @media(max-width: 400px){
//     width: 70px;
//   height: 100px;
//   }
//   `
//       : `  width: 174px;
//   height: 242px;
//   `};
// }

export const CardItem = styled.div<CardContentProps>`
  display: flex;
  gap: 8px;

  ${({ isList }) =>
    isList
      ? `flex-wrap: wrap;
      flex-direction: row;
      align-items: baseline;
  }
  `
      : `flex-direction: column;
    width: 174px;
    height: 100%;
    justify-content: space-between;
    @media(max-width:370px){
       width: 100%;
       justify-content: center;
     }
  `};
`;

export const CardTitle = styled.p<CardContentProps>`
  font-family: 'Montserrat';
  font-style: normal;

  letter-spacing: 0.1px;
  color: #${DARK};
  ${({ isList }) =>
    isList
      ? `
      flex: 0 0 100%;
      max-width: 100%;
      font-weight: 700;
      font-size: 24px;
      line-height: 125%;
      @media(max-width: 640px){
        max-width: 270px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
     line-height: 129%;
      }
      @media(max-width: 540px){
        max-width: 186px;
      }`
      : `font-weight: 600;
      font-size: 14px;
      line-height: 129%;
      @media(max-width:370px){
        width: 100%;
        justify-content: center;
      }
      `};
`;

export const CardAuthor = styled.p<CardContentProps>`

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: ${BLACK70};
  @media(max-width: 640px){
    font-size: 12px;
    line-height: 150%;
  

  ${({ isList }) =>
    isList
      ? `
      flex: 0 0 100%;
      max-width: 100%;
    font-size: 16px;
    line-height: 150%;
 }`
      : `font-size: 14px;
     line-height: 129%;
    `};
`;

export const CardRating = styled.div`
  width: 144px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  color: ${BLACK40};
  @media (max-width: 640px) {
    width: 104px;
  }
`;
export const CardButton = styled.p<CardContentProps>`
  ${({ isList }) =>
    isList
      ? `width: 174px;       
      @media(max-width: 500px){
        width: 186px;
      }
  `
      : `width: 166px;
      margin-top: 20px;
      @media(max-width:370px){
        width: 100%;}`};
`;

export const CardButtonWrapper = styled.div<CardContentProps>`
  width: 100%;
  display: flex;

  ${({ isList }) =>
    isList
      ? `flex-direction: row;
    justify-content: space-between;
    @media(max-width: 500px){
      flex-direction: column; 
      gap: 16px;
    }`
      : `flex-direction: column;`};
`;

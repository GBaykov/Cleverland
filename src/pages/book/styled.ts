import styled from 'styled-components';
import { BLACK40, BLACK5, BLACK70, DARK } from '../../constants/styles';
import cat from '../../assets/icons/cat.svg';

export const RelativeBook = styled.main`
  position: relative;
  flex: 1 0 auto;
  margin-top: 27px;
  @madia (max-width: 768px) {
    margin-top: 22px;
  }
  @madia (max-width: 400px) {
    margin-top: 8px;
  }
`;

export const BookPageContainer = styled.section`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 100%;
`;

export const BookPageAddress = styled.p`
  display: flex;
  width: 100%;
  margin-bottom: 42px;
  text-align: center;
  background-color: ${BLACK5};
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.1px;
    color: ${BLACK40};
  }
  padding: 20px 40px 20px 165px;

  // @media (max-width: 1430px) {
  //   padding: 30px 8.3% 62px;
  // }

  @media (max-width: 800px) {
    padding: 20px 64px;
    margin-bottom: 48px;
  }

  // @media (max-width: 767px) {
  //   padding: 8px 16px 62px;
  // }

  // @media (max-width: 600px) {
  //   padding: 8px 10px 62px;
  // }
  @media (max-width: 550px) {
    padding: 20px 10px;
    margin-bottom: 20px;
    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 133%;
      letter-spacing: 0.2px;
    }
  }
`;

export const BookPageContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 52px;
  padding: 0 11.458% 62px;

  @media (max-width: 1430px) {
    padding: 0 8.3% 62px;
  }

  @media (max-width: 767px) {
    padding: 0 16px 62px;
  }

  @media (max-width: 600px) {
    padding: 0 10px 62px;
  }
  @media (max-width: 550px) {
    padding: 0 10px 62px;
  }
`;

export const BookMainBlock = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 760px;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 1250px) {
    max-height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 670px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 16px;
    align-items: center;
  }
  @media (max-width: 500px) {
    // gap: 0;
  }
`;

interface BookPhotoProps {
  bookphoto?: string;
}

export const BookPhoto = styled.p<BookPhotoProps>`
  border: 1px solid #a7a7a7;
  border-radius: 10px;

  align-self: center;

  ${({ bookphoto }) =>
    bookphoto
      ? `background: no-repeat  url(${bookphoto}); background-size: 100% 100%;`
      : `background: ${BLACK5}  no-repeat center url(${cat}) `};

  width: 445px;
  height: 593px;

  @media (max-width: 1250px) {
    width: 188px;
    height: 260px;
  }
  @media (max-width: 950px) {
    width: 136px;
    height: 198px;
  }
  @media (max-width: 500px) {
    width: 188px;
    height: 260px;
  }
`;

export const BookMainInfo = styled.div`
  width: 100%;
  max-width: 635px;
  display: flex;
  flex-direction: column;
  flex-shrink: 3;
  gap: 24px;

  @media (max-width: 1250px) {
    max-width: 535px;
  }
  @media (max-width: 950px) {
    max-width: 472px;
  }

  @media (max-width: 500px) {
  }
`;

export const BookMainDiscription = styled.div`
  max-width: 635px;
  font-family: 'Montserrat';
  font-style: normal;
  letter-spacing: 0.1px;
  color: ${DARK};

  @media (max-width: 670px) {
    margin-top: 26px;
  }

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 32px;

    @media (max-width: 670px) {
      font-size: 18px;
      line-height: 156%;
    }
  }
  div {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const BookTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;

  letter-spacing: 0.1px;
  color: ${DARK};

  font-weight: 700;
  font-size: 32px;
  line-height: 140%;

  @media (max-width: 1250px) {
    font-size: 24px;
    line-height: 125%;
  }
  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 156%;
  }
`;

export const BookAuthor = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  letter-spacing: 0.1px;
  color: ${BLACK40};

  @media (max-width: 1250px) {
    font-size: 14px;
    line-height: 129%;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 150%;
  }
`;

export const BookMainButton = styled.p`
  width: 350px;
  height: 52px;

  @media (max-width: 670px) {
    align-self: center;
  }

  @media (max-width: 800px) {
    width: 306px;
  }

  @media (max-width: 370px) {
    width: 100%;
    height: 40px;
  }
`;

export const BookRatingBlock = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 84px;
  gap: 16px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${DARK};

  @media (max-width: 640px) {
    height: 104px;
    font-size: 16px;
    line-height: 24px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: 640px) {
      flex-wrap: wrap;
    }
  }
  div p {
    @media (max-width: 640px) {
      width: 218px;
      img {
        @media (max-width: 640px) {
          width: 27.6px;
          height: 26.5px;
          margin-right: 15px;
          :last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`;

export const BookDetailsContainer = styled.div`
  align-self: flex-start;
  width: 100%;

  > p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: ${DARK};
    margin-bottom: 32px;

    @media (max-width: 640px) {
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

export const BookDetailsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;

  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 780px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 0px;
  }

  > div {
    display: flex;
    flex-direction: row;
    max-width: 635px;
    min-width: 305px;

    div {
      display: flex;
      flex-direction: column;
      gap: 16px;
      @media (max-width: 700px) {
        gap: 0px;
      }
    }
  }

  @media (max-width: 700px) {
    div {
      gap: 0px;
    }
    p {
      height: 36px;
    }
    span {
      height: 36px;
    }
  }

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: ${BLACK40};
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;

    color: ${DARK};
    margin-left: 34px;
  }
`;

export const FeedbackContainer = styled.section`
  margin-top: 52px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FeedbackTitle = styled.p`
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  border-bottom: 1px solid #ebebeb;
  color: ${DARK};
  max-width: 140px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  @media (max-width: 800px) {
    // width: 307px;
  }
  @media (max-width: 350px) {
    width: 100%;
    margin-bottom: 8px;
  }

  span > svg {
    fill: ${DARK};
    margin-right: 0;
    margin-left: 0;
    // transform: rotate(180deg);
  }
`;

export const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  gap: 16px;

  @media (max-width: 640px) {
    gap: 8px;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    p {
      display: flex;
      gap: 24px;
      @media (max-width: 400px) {
        flex-direction: column;
        gap: 3px;
      }
      span {
        color: ${BLACK70};
      }
    }
  }

  > p {
    font-size: 16px;
    line-height: 24px;
    color: ${DARK};
  }
`;

interface FeedbacksProps {
  isRolled: boolean;
}
export const Feedbacks = styled.div<FeedbacksProps>`
  display: flex;

  flex-direction: column;
  gap: 42px;

  @media (max-width: 640px) {
    gap: 32px;
    margin-bottom: 20px;
  }
  ${({ isRolled }) => (isRolled ? 'display: none' : '')}
`;

export const ReviewButton = styled.p`
  width: 350px;
  height: 52px;
  margin-top: 42px;
  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 40px;
  }
  button {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }
`;

import styled from 'styled-components';
import { BLACK20 } from '../../constants/styles';

interface BookPhotoProps {
  bookphoto?: string;
}
// ${({ bookphoto }) =>
// bookphoto
//   ? `background: no-repeat  url(${bookphoto}); background-size: 100% 100%;`
//   : `background: ${BLACK5}  no-repeat center url(${cat}) `};

export const MainSlidContainer = styled.div`
  border: 1px solid #a7a7a7;
  border-radius: 10px;

  //   align-self: center;

  max-width: 445px;
  max-height: 593px;

  @media (max-width: 1250px) {
    max-width: 188px;
    max-height: 260px;
  }
  @media (max-width: 950px) {
    max-width: 136px;
    max-height: 198px;
  }
  @media (max-width: 500px) {
    max-width: 188px;
    max-height: 260px;
  }
`;

export const SliderContainer = styled.div`
  max-width: 445px;
  max-height: 696px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 1250px) {
    width: 188px;
  }
  @media (max-width: 950px) {
    width: 136px;
    min-height: 320px;
  }
  @media (max-width: 500px) {
    width: 188px;
  }
`;

export const PhotoesPreview = styled.div`
  max-width: 445px;
  max-height: 86px;
  align-items: center;

  @media (max-width: 1250px) {
    max-width: 136px;
  }
  @media (max-width: 950px) {
    max-width: 136px;
  }
  @media (max-width: 500px) {
    max-width: 136px;
  }
`;

export const SwiperThumb = styled.div`
  max-width: 65px;
  max-height: 86px;
//   @media(max-width:1250px){
//     display:none;
//   }

  }
`;

// export const SwiperDot = styled.span`
//   width: 7px;
//   height: 7px;
//   border-radius: 50%;
//   background: ${BLACK20};
// `;

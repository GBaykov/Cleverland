import styled from 'styled-components';
import { BLACK40 } from '../../constants/styles';

interface StarsContentProps {
  width?: number;
}

export const StarsContent = styled.p<StarsContentProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  width: ${({ width }) => (width ? ` ${width}px` : `144px`)};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK40};
  @media (max-width: 640px) {
    img {
      width: 13.33px;
      height: 12.56px;
    }
    justify-content: space-between;
  }
`;

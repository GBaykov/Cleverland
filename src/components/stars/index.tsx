import fullStar from '../../assets/icons/fullStar.svg';
import emptyStarIco from '../../assets/icons/emptyStar.svg';
import { StarsContent } from './styled';

export interface StarsProps {
  rating: number;
}

export const Stars = ({ rating }: StarsProps) => {
  if (rating) {
    const duplicate = (x: string, n: number) => Array.from(new Array(n), () => x);
    // const star = ;
    // const emptyStar = <img src={emptyStarIco} alt='rating empty star' />;
    const maxStarsCount = 5;

    const integerStar = Math.trunc(rating);
    const rest = rating - integerStar;
    let starscount: number;
    if (rest * 10 >= 5) {
      starscount = integerStar + 1;
    } else {
      starscount = integerStar;
    }
    const fullStars: string[] = duplicate(fullStar, starscount);
    const arrFullStars: JSX.Element[] = fullStars.map((star) => (
      <img src={star} alt='rating star' key={Math.round(Math.random() * 1000)} />
    ));

    const emptyStars = duplicate(emptyStarIco, maxStarsCount - starscount);
    const arrEmptyStars: JSX.Element[] = emptyStars.map((star) => (
      <img src={star} alt='rating empty star' key={Math.round(Math.random() * 1000)} />
    ));

    return (
      <StarsContent width={144}>
        {arrFullStars}
        {arrEmptyStars}
      </StarsContent>
    );
  }
  // return <StarsContent>ещё нет оценок</StarsContent>;
  return null;
};

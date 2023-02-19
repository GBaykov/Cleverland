import emptyStarIco from '../../assets/icons/emptyStar.svg';
import { StarsContent } from './styled';

export const EmptyStars = () => {
  const duplicate = (x: string, n: number) => Array.from(new Array(n), () => x);
  // const star = ;
  // const emptyStar = <img src={emptyStarIco} alt='rating empty star' />;
  const maxStarsCount = 5;

  const emptyStars = duplicate(emptyStarIco, 5);
  const arrEmptyStars: JSX.Element[] = emptyStars.map((star) => (
    <img src={star} alt='rating empty star' key={Math.round(Math.random() * 1000)} />
  ));

  return <StarsContent width={168}>{arrEmptyStars}</StarsContent>;
};

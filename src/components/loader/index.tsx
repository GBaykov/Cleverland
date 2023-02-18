import { LoaderContainer, Spinner } from './styled';
import spinner from '../../assets/gif/spinner.svg';

export const Loader = () => (
  <LoaderContainer>
    <Spinner>
      <img src={spinner} alt='' />
    </Spinner>
  </LoaderContainer>
);

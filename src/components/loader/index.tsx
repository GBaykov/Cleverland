import { LoaderContainer, Spinner } from './styled';
import spinner from '../../assets/gif/spinner.svg';

export const Loader = () => (
  <LoaderContainer data-test-id='loader'>
    <Spinner>
      <img src={spinner} alt='' />
    </Spinner>
  </LoaderContainer>
);

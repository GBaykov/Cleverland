import { ModalContainer, Spinner } from './styled';
import spinner from '../../assets/gif/spinner.svg';

export const Loader = () => (
  <ModalContainer data-test-id='loader'>
    <Spinner>
      <img src={spinner} alt='' />
    </Spinner>
  </ModalContainer>
);

import { NotificationContainer, NotificationCross, NotiIco } from './styled';
import fail from '../../assets/icons/fail.svg';
// import cross from '../../assets/icons/cross.svg';
import { cross } from '../../constants/svg';

export interface NotificationProps {
  text: string;
}

export const NotificationError = ({ text }: NotificationProps) => (
  <NotificationContainer>
    {/* <img src={fail} alt='fail' /> */}
    <NotiIco>!</NotiIco>
    <span>{text}</span>
    <NotificationCross>{cross}</NotificationCross>
  </NotificationContainer>
);

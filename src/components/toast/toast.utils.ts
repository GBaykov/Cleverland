import { ToastNegativeSVG, ToastPositiveSVG } from '../../assets/icons';

import { ToastVariant } from './toast.enum';
import { NegativeToast, PositiveToast } from './styled';

export const getToastStyles = (toastVariant: ToastVariant = ToastVariant.negative) => {
  if (toastVariant === ToastVariant.negative)
    return {
      styledComponent: NegativeToast,
      icon: ToastNegativeSVG,
    };

  return {
    styledComponent: PositiveToast,
    icon: ToastPositiveSVG,
  };
};

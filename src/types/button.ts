export enum BtnType {
  button = 'button',
  submit = 'submit',
}

export type ButtonProps = {
  height?: number;
  width?: number;
  isPrimary: boolean;
  text: string;
  disabled?: boolean;
  type?: BtnType;
  onClick?: () => void;
  isDisabled?: boolean;
};

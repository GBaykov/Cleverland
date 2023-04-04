import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1110px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 640px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 288px;
    margin: 0 auto;
  }
`;

export const Container = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: ${(props) => (props.isActive ? '64px' : '-200px')};
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.1s ease-in-out;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
`;
export const WrapperToast = styled(Wrapper)`
  border-radius: 5px;
  font: ${(props) => props.theme.fonts.subtitleLarge};
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NegativeToast = styled(WrapperToast)`
  background: ${(props) => props.theme.color.toast.negative};
  border: ${(props) => props.theme.color.toast.borderNegative};
`;

export const PositiveToast = styled(WrapperToast)`
  background: ${(props) => props.theme.color.toast.positive};
  border: ${(props) => props.theme.color.toast.borderPositive};
`;

export const ToastInfo = styled(Wrapper)`
  display: flex;
  gap: 24px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  width: auto;
  height: auto;
`;

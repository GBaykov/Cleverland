import styled from 'styled-components';

export const ModalMain = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 60px;
  position: relative;
  min-width: 528px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    min-width: auto;
    width: 288px;
    max-width: 288px;
    padding: 22px 16px;
  }

  & p {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #363636;
    max-width: 200px;
    @media screen and (max-width: 600px) {
      width: 246px;
      font-size: 18px;
      line-height: 28px;
    }
  }
  & button {
    position: absolute;
    top: 32px;
    right: 32px;
    cursor: pointer;
    background: #f9f9fa;
    border-radius: 100%;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
      width: 32px;
      height: 32px;
      right: 16px;
      top: 16px;
    }
  }
`;

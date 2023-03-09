import styled from 'styled-components';
import { DARK, WHITE } from '../../constants/styles';

export const FormLayout = styled.section`
padding: 48px 56px;
width: 100%;
max-width: 528px;
background: ${WHITE}
border-radius: 16px;
@media(max-width: 600px){
    max-width: 288px;
    padding: 24px 16px;
}
`;

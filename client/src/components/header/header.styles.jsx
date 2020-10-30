import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
width: 5%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
visibility: hidden;

@media screen and (max-width: 800px) {
  height: 60px;
  padding: 0px;
  margin-bottom: 20px;
  visibility: visible;
}
`;

export const LogoContainerCrown = styled(Link)`
width: 5%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
visibility: visible;

@media screen and (max-width: 800px) {
  height: 60px;
  padding: 10px;
  margin-bottom: 20px;
  visibility: hidden;
}
`;


export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 3000ms;
`;

export const NavMenuActive = styled.div`
  left: 0;
  transition: 3000ms;
  `;

import styled from 'styled-components';

import { ReactComponent as HamburgerSVG } from '../../assets/hamburger.svg';

export const NavIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavIcon = styled(HamburgerSVG)`
height: 100%;
width: 70px;
`;

export const NavContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

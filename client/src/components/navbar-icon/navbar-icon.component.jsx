import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { navbarCartHidden } from '../../redux/navbar/navbar.actions';
// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  NavIconContainer,
  NavIcon,
  NavContainer
} from './navbar-icon.styles';

const NavbarIcon = ({navbarCartHidden}) => (
  <NavIconContainer onClick={navbarCartHidden}>
    <NavIcon />
    <NavContainer></NavContainer>
  </NavIconContainer>
);

const mapDispatchToProps = dispatch => ({
  navbarCartHidden: () => dispatch(navbarCartHidden())
});

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

export default connect(
  null, mapDispatchToProps
)(NavbarIcon);

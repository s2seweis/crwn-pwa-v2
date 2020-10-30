import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';

// import NavbarIcon from '../navbar-icon/navbar-icon.component';


import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// import NavbarDropdown from '../navbar-sidebar-component/navbar-sidebar.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import Navbar from '../navbar/navbar';


import {
  HeaderContainer,
  LogoContainer,
  LogoContainerCrown,
  OptionsContainer,
  OptionLink
} from './header.styles';


const Header = ({ currentUser, hidden, hid, signOutStart }) => (
  <HeaderContainer>
    
   
    
    {/* <LogoContainerCrown to='/'>
      <Logo className='logo' />
    </LogoContainerCrown> */}
   
    <LogoContainer >
      {/* <Logo className='logo' /> */}
      {/* <NavbarIcon /> */}
      <Navbar />
    </LogoContainer>
    
    <OptionsContainer>
    
      <OptionLink to='/'>SHOP</OptionLink>
      <OptionLink to='/tos'>TOS</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {/* {hid ? null : <NavbarDropdown />} */}
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
 
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

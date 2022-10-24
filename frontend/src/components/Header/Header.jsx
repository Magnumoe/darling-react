import React from 'react';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = (props) => {
  return (
    <header className='Header'>
        <h1>{props.title}</h1>
        <HamburgerMenu handleNavbar={props.handleNavbar}/>
    </header>
  )
}

export default Header
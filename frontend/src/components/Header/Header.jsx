import React from 'react';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = (props) => {
  return (
    <div className='Header'>
        <h1>{props.title}</h1>
        <HamburgerMenu handleNavbar={props.handleNavbar}/>
    </div>
  )
}

export default Header
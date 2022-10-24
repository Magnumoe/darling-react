import React from 'react'

const HamburgerMenu = (props) => {
  return (
    <div className='HamburgerMenu' onClick={props.handleNavbar}>
        <div className='HamburgerMenu__line'></div>
        <div className='HamburgerMenu__line'></div>
        <div className='HamburgerMenu__line'></div>
    </div>
  )
}

export default HamburgerMenu
import React from 'react';
import { NavLink } from 'react-router-dom';

import "./navbar.css";

const Navbar = (props) => {

    return (
        <nav className={`navbar ${props.navbarActive ? 'visible' : 'collapsed'}`}>
            <>
                <ul>

                    <NavLink
                        to="/"
                        className={(navData) =>
                            navData.isActive ? 'active' : 'NavLink'}
                        end // end used to be exact in v5
                    >
                        <li>
                            <span className="material-icons">logo</span>
                        </li>
                    </NavLink>


                    <NavLink
                        to="/"
                        className={(navData) =>
                            navData.isActive ? 'active' : 'disabled'}
                        end // end used to be exact in v5
                    >
                        <li>
                            <span className="material-icons">Home</span>
                        </li>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={(navData) =>
                            navData.isActive ? 'active' : 'NavLink'}
                    >
                        <li>
                            <span className="material-icons">About</span>
                        </li>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={(navData) =>
                            navData.isActive ? 'active' : 'NavLink'}
                    >
                        <li>
                            <span className="material-icons">Contact</span>
                        </li>
                    </NavLink>

                    <NavLink
                        to="/business"
                        className={(navData) =>
                            navData.isActive ? 'active' : 'NavLink'}
                    >
                        <li>
                            <span className="material-icons">For businesses</span>
                        </li>
                    </NavLink>

                    <NavLink
                        to="/positions"
                        className={(navData) =>
                            navData.isActive ? 'active' : 'NavLink'}
                    >
                        <li>
                            <span className="material-icons">Positions</span>
                        </li>
                    </NavLink>

                    <li>
                        <a rel="noreferrer" href="https://www.linkedin.com/company/darling-linjeforening/" target="_blank" className="social-link">
                            <span className="material-icons">linkedin</span>
                        </a>
                    </li>

                    <li>
                        <a rel="noreferrer" href="https://www.instagram.com/darling.linjeforening/" target="_blank" className="social-link">
                            <span className="material-icons">Instagram</span>
                        </a>
                    </li>

                    <li>
                        <a rel="noreferrer" href="https://www.facebook.com/darling.linjeforening" target="_blank" className="social-link">
                            <span className="material-icons">facebook</span>
                        </a>
                    </li>
                </ul>
            </>
        </nav>
    );
}

export default Navbar
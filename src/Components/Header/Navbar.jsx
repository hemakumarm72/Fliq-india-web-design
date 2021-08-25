import React from 'react';
import { Linkdata } from 'Assest/Data/HomepagesData';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navigation">
            <div className="logo" />
            <Linkdiv />
            <Loginbutton />
        </div>
    );
}

const Loginbutton = () => (
    <>
        <div className="button-container">
            <button className="loginbtn" type="button">
                Log in /Sign up
            </button>
        </div>
    </>
);
const Linkdiv = () => (
    <nav>
        <ul>
            {Linkdata.map((d) => (
                <li key={d.name}>
                    <NavLink activeClassName="active" exact to={d.link}>
                        {d.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);
export default Navbar;

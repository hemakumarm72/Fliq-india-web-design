import React from 'react';
import Navbar from 'Components/Header/Navbar';
import { Container } from 'Components';
import 'Styles/Header/Header.css';

function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header">
                    <Container>
                        <Navbar />
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Header;

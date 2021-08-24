import React from 'react';
import Navbar from 'Components/HomepageCom/Header/Navbar';
import { Container } from 'Components/HomepageCom/Container/Container';
import 'Styles/Homepages/Header.css';

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

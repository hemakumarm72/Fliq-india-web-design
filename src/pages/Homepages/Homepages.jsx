import React from 'react';
import { Helmetdata } from 'Elements';
import { Slideshow, About, Container } from 'Components';
import 'Styles/Homepages/Homepage.css';

function Homepages() {
    return (
        <>
            <Helmetdata
                title="FliqaIndia: Photography, Videography & Graphic Design related creative
platform"
                link={window.location.href}
                description="Personalised platforms for Photography, Videography with
Graphics. One of the leading platforms in the creative domain."
                pagesname="Fliqa India | Home Pages"
            />
            <Container>
                <Slideshow />
                <About />
            </Container>
        </>
    );
}

export default Homepages;

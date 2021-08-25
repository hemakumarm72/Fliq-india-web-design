import React from 'react';
import { Container } from 'Components/HomepageCom/Container/Container';

function Slideshow() {
    return (
        <Container>
            <Slidershowdiv />
        </Container>
    );
}

const Slidershowdiv = () => (
    <div className="slider">
        <h1>slider</h1>
    </div>
);

export default Slideshow;

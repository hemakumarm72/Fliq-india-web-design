import React from 'react';
import { Helmetdata } from 'Elements';
import Slideshow from 'Components/HomepageCom/SliderShow/Slideshow';

function Homepages() {
    return (
        <>
            <Helmetdata
                title="FliqaIndia: Photography, Videography & Graphic Design related creative
platform"
                link={window.location.href}
                description="Personalised platforms for Photography, Videography with
Graphics. One of the leading platforms in the creative domain."
            />
            <Slideshow />
        </>
    );
}

export default Homepages;

import React from 'react';
import { LogoDesign } from 'Components';
import { Helmetdata } from 'Elements';

function Logopages() {
    return (
        <>
            <Helmetdata
                title="Logo Design"
                link={window.location.href}
                description="Make your own brand identity through us. Start your design now."
            />
            <LogoDesign />
        </>
    );
}

export default Logopages;

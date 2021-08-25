import React from 'react';
import { Service } from 'Components';
import { Helmetdata } from 'Elements';

function Servicespage() {
    return (
        <>
            <Helmetdata
                title="Logo Design"
                link={window.location.href}
                description="Make your own brand identity through us. Start your design now."
            />
            <Service />
        </>
    );
}

export default Servicespage;

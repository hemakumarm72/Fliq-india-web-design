import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Helmetdata({ title, link, description }) {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="title" content={title} />
                    <link rel="canonical" href={link} />
                    <meta name="description" content={description} />
                </Helmet>
            </HelmetProvider>
        </>
    );
}

export default Helmetdata;

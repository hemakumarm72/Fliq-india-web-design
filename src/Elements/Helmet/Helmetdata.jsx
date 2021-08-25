import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Helmetdata({ title, link, description, pagesname }) {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="title" content={title} />
                    <link rel="canonical" href={link} />
                    <title>{pagesname}</title>
                    <meta property="og:url" content={link} />
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta name="twitter:site" content={link} />
                    <meta property="twitter:url" content={link} />
                    <meta property="twitter:title" content={title} />
                    <meta
                        property="twitter:description"
                        content={description}
                    />
                </Helmet>
            </HelmetProvider>
        </>
    );
}

export default Helmetdata;

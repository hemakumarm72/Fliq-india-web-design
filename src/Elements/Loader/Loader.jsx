import React from 'react';

import 'Styles/Loader/loader.css';

const LoadingPage = () => {
    return (
        <div className="background">
            <div id="loader">
                <div className="diamond" />
                <div className="diamond" />
                <div className="diamond" />
            </div>
        </div>
    );
};

export default LoadingPage;

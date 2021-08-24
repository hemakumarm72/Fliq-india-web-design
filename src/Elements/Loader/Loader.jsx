import React from 'react';

import 'Styles/Loader/loader.css';

const LoadingPage = () => {
    return (
        <div className="page">
            <div className="loader-container">
                <div className="top box white" />
                <div className="middle box" />
                <div className="bottom box white" />
            </div>
        </div>
    );
};

export default LoadingPage;

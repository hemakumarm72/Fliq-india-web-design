import React from 'react';

import 'Styles/Homepages/About.css';

function About() {
    return (
        <>
            <div className="Aboutsection">
                <Aboutcontent />
            </div>
        </>
    );
}

const Aboutcontent = () => (
    <div className="Aboutcontent">
        <article>
            <h1 className="headingtitle">About</h1>
            <p className="titlemain">
                <span style={{ color: '#5684c8' }}> Fliqaindia </span> for
                everyone
            </p>
            <p className="contentpara">
                With this belief, we at Fliqaindia started our journey 5 years
                ago with <br />
                the belief that everyone has the right to quality photography to
                help <br />
                them better capture and conserve their special moments. We have{' '}
                <br />
                been appreciated and recommended by Start Up India, StartUp{' '}
                <br />
                Bengal, Imagesbazaar and Digital India for our novel initiative.
                We <br />
                have partnered with Canvera to give you the best service
                possible. We <br />
                are also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire{' '}
                <br />
                and so many well known event organisers.{' '}
            </p>
        </article>
    </div>
);

export default About;

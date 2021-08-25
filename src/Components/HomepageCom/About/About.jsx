import React from 'react';
import { Container } from 'Components/HomepageCom/Container/Container';
import 'Styles/Homepages/About.css';

function About() {
    return (
        <>
            <Container>
                <div className="Aboutsection">
                    <Aboutcontent />
                </div>
            </Container>
        </>
    );
}

const Aboutcontent = () => (
    <div className="Aboutcontent">
        <article>
            <h1>About</h1>
            <p className="titlemain">
                {' '}
                <span> Fliqaindia </span> for everyone
            </p>
            <p className="contentpara">
                <span className="linebreak">
                    {' '}
                    With this belief, we at Fliqaindia started our journey 5
                    years ago with{' '}
                </span>{' '}
                <span className="linebreak">
                    {' '}
                    the belief that everyone has the right to quality
                    photography to help{' '}
                </span>{' '}
                <span className="linebreak">
                    them better capture and conserve their special moments. We
                    have{' '}
                </span>{' '}
                <span className="linebreak">
                    {' '}
                    been appreciated and recommended by Start Up India, StartUp{' '}
                </span>{' '}
                <span className="linebreak">
                    {' '}
                    Bengal, Imagesbazaar and Digital India for our novel
                    initiative. We{' '}
                </span>{' '}
                <span className="linebreak">
                    {' '}
                    have partnered with Canvera to give you the best service
                    possible. We{' '}
                </span>{' '}
                <span className="linebreak">
                    {' '}
                    are also trusted by Justdial, WedMEGood, Shaadisaga,
                    weddingwire{' '}
                </span>{' '}
                and so many well known event organisers.
            </p>
        </article>
    </div>
);

export default About;

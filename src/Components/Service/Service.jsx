import React from 'react';
import { Container } from 'Components/HomepageCom/Container/Container';
import 'Styles/Logopages/Logopages.css';

function Service() {
    return (
        <div>
            <Container>
                <Contentsection />
            </Container>
            <Sectionquery />
        </div>
    );
}

const Contentsection = () => (
    <>
        <div className="contentsection">
            <article>
                <h1 className="title">What is Logo Design ?</h1>
                <p>
                    <span>
                        {' '}
                        Logo tells the story of your brand. It enhances your
                        brand image and speaks to your audience.
                    </span>{' '}
                    <span>
                        Logo design makes the first impression for you in your
                        working environment. Gives your{' '}
                    </span>{' '}
                    <span>
                        business and brand an identity and projects a
                        professional image. It creates memorable visuals{' '}
                    </span>{' '}
                    to the outside world and build loyalty.
                </p>
            </article>
        </div>
    </>
);

const Sectionquery = () => (
    <div className="sectionquery">
        <div className="button_container">
            <button className="startdesignbtn btn" type="button">
                Start designing
            </button>
            <button className="getquotebtn btn" type="button">
                Get a quote
            </button>
        </div>
    </div>
);
export default Service;

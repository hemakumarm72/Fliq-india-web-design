import React, { Suspense } from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';
import Header from 'Components/Header/Header';
// import { Homepages } from 'pages';

const Homepages = lazy(() =>
    import('pages').then((module) => module.Homepages)
);
const Logopages = lazy(() =>
    import('pages').then((module) => module.Logopages)
);

function Routers() {
    return (
        <Routes>
            <Suspense fallback={<Loader />}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Homepages} />

                    <Route path="/services" component={Logopages} />
                </Switch>
            </Suspense>
        </Routes>
    );
}

export default Routers;

import React, { Suspense } from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';
import Header from 'Components/HomepageCom/Header/Header';
// import { Homepages } from 'pages';

const Homepages = lazy(() => import('pages/Home/Homepages'));
const Servicepage = lazy(() => import('pages/Service/Servicepage'));

function Routers() {
    return (
        <Routes>
            <Suspense fallback={<Loader />}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Homepages} />

                    <Route path="/services" component={Servicepage} />
                </Switch>
            </Suspense>
        </Routes>
    );
}

export default Routers;

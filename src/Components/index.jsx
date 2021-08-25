import { lazy } from '@loadable/component';

// export { default as Header } from 'Components/HomepageCom/Header/Header';
// export { default as Service } from 'Components/Service/Service';

const Header = lazy(() => import('Components/Header/Header'));
const LogoDesign = lazy(() => import('Components/LogopageCom/LogoDesign'));
const About = lazy(() => import('Components/HomepageCom/About/About'));
const Slideshow = lazy(() =>
    import('Components/HomepageCom/SliderShow/Slideshow')
);
export { Header, LogoDesign, About, Slideshow };

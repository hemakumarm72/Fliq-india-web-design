import { lazy } from '@loadable/component';

// export { default as Header } from 'Components/HomepageCom/Header/Header';
// export { default as Service } from 'Components/Service/Service';

const Header = lazy(() => import('Components/Header/Header'));
const LogoDesign = lazy(() => import('Components/LogopageCom/LogoDesign'));

export { Header, LogoDesign };

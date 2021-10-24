// import { Store } from 'redux';
import { RouteProps } from 'react-router';
import App from './App';
import Authentication from './views/auth/authentication';
import LandingPage from './views/landing/landingPage';
import plantList from './views/plants/plantList';
import Profile from './views/profile/profile';

export default function Routes(/*store: Store*/): RouteProps [] {
  return [
    { path: '/', component: App },
    { path: '/home', component: LandingPage },
    { path: '/auth', component: Authentication },
    { path: '/profile', component: Profile },
    { path: '/plants', component: plantList },
  ];
}

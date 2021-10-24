import { Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/auth/login/login';
import SignUp from './components/auth/registration/signup';
import Authentication from './views/auth/authentication';
import LandingPage from './views/landing/landingPage';
import plantList from './views/plants/plantList';
import Profile from './views/profile/profile';

interface RouteConfig {
  path: string;
  key: string;
  exact?: boolean;
  component: (props: any) => JSX.Element;
  routes?: RouteConfig[];
}

const ROUTES: RouteConfig[] = [
  { path: '/', key: 'HOME', exact: true, component: LandingPage },
  { path: '/home', key: 'HOME', component: RenderRoutes },
  {
    path: '/auth',
    key: 'AUTH',
    exact: true,
    component: Authentication,
    routes: [
      {
        path: '/auth/login',
        key: 'LOGIN',
        exact: true,
        component: Login,
      },
      {
        path: '/auth/sign-up',
        key: 'REGISTER',
        exact: true,
        component: SignUp,
      },
    ],
  },
  { path: '/profile', key: 'PROFILE', exact: true, component: Profile },
  { path: '/plants', key: 'PLANTS', exact: true, component: plantList },
];

export default ROUTES;

function RouteWithSubRoutes(route: RouteConfig): JSX.Element {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }: { routes: RouteConfig[] }) {
  console.log(routes);
  return (
    <Switch>
      {routes.map((route: RouteConfig) => {
        return <RouteWithSubRoutes {...route} />;
      })}
      <Route component={() => <h1>NOT FOUND!</h1>} />
    </Switch>
  );
}

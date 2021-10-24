import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/auth/login/login';
import SignUp from './components/auth/registration/signup';
import LandingPage from './views/landing/landingPage';
import plantList from './views/plants/plantList';
import Profile from './views/auth/profile/profile';
import { useAuth, AuthContextType } from './contexts/AuthContext';

interface RouteConfig {
  path: string;
  key: string;
  exact?: boolean;
  component: (props: any) => any;
  routes?: RouteConfig[];
}

function ROUTES(): RouteConfig[] {
  const auth: AuthContextType | null = useAuth();
  const isLoggedIn: boolean = auth?.currentUser !== null;

  return [
    { path: '/', key: 'HOME', exact: true, component: LandingPage },
    // This is the way to nest the routes
    // {
    //   path: '/auth',
    //   key: 'AUTH',
    //   component: RenderRoutes,
    //   routes: [
    //     {
    //       path: '/auth/login',
    //       key: 'LOGIN',
    //       exact: true,
    //       component: Login,
    //     },
    //     {
    //       path: '/auth/sign-up',
    //       key: 'REGISTER',
    //       exact: true,
    //       component: SignUp,
    //     },
    //   ],
    // },
    { path: '/login', key: 'LOGIN', exact: true, component: Login },
    { path: '/sign-up', key: 'REGISTER', exact: true, component: SignUp },
    {
      path: '/profile',
      key: 'PROFILE',
      component: (props) => {
        console.log(auth?.currentUser);
        /* TODO: update
          cant check on calling URL if user is logged in with firebase
          workaround: https://stackoverflow.com/a/51856627
        */

        if (!isLoggedIn) {
          alert('You need to log in');
          return <Redirect to={'/login'} />;
        } else {
          return <RenderRoutes {...props} />;
        }
      },
      routes: [
        {
          path: '/profile',
          key: 'PROFILE_AUTH',
          exact: true,
          component: Profile,
        },
      ],
    },
    { path: '/plants', key: 'PLANTS', exact: true, component: plantList },
  ];
}

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
  return (
    <Switch>
      {routes.map((route: RouteConfig) => {
        return <RouteWithSubRoutes {...route} />;
      })}
      <Route component={() => <h1>NOT FOUND!</h1>} />
    </Switch>
  );
}

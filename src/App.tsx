import './App.css';
import { Route } from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
// import Authentication from './views/auth/authentication';
// import LandingPage from './views/landing/landingPage';
import Routes from './routes';
import Layout from './Layout';



function App() {
  const RouteComponent = Routes().map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  
  return (
    // <Router>
    //   <div className="App">
    //     <Navbar></Navbar>
    //     <Switch>
    //       <Route path="/auth">
    //         <Authentication />
    //       </Route>

    //       <Route path="/">
    //         <LandingPage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Layout>
      {RouteComponent}
    </Layout>
  );
}

export default App;

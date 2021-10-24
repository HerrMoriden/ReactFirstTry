import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
// import Authentication from './views/auth/authentication';
// import LandingPage from './views/landing/landingPage';
import ROUTES, { RenderRoutes } from './routes';

function App() {
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
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RenderRoutes routes={ROUTES()} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/header';

import Home from './pages/Home/home';
import Filme from './pages/Filme/filme';
import Favoritos from './pages/Favoritos/favoritos';
import Erro from './pages/Erro/erro';



const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;


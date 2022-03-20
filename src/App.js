import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container} from '@material-ui/core';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';
import Series from './components/Pages/Series/Series';
import Trending from './components/Pages/Trending/Trending';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <div className="app"> 
    <Container>
      <Switch>
        <Route path='/' component={Trending} exact></Route>
        <Route path='/movies' component={Movies} ></Route>
        <Route path='/series' component={Series}></Route>
        <Route path='/search' component={Search}></Route>
      </Switch>
    </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

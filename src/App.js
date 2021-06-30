import './App.css';
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './components/home/home'
import Accesorios from './components/accesorios/accesorios'
import Computadoras from './components/computadoras/computadoras'
function App() {

  let message = "Message for Item List Container"

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/accesorios">
          <Accesorios/>
        </Route>
        <Route exact path="/computadoras">
          <Computadoras/>
        </Route>
      </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;

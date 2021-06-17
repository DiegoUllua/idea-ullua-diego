import './App.css';
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {

  let message = "Message for Item List Container"

  return (
    <div className="App">
       <NavBar></NavBar>
        <ItemListContainer message={message}/>
    </div>
  );
}

export default App;

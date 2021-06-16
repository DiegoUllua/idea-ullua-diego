import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar'

function App() {

  const menuItems = ['software','computadoras', 'accesorios','merchandising'];
  const user = "Diego";
  return (
    <div className="App">
       <NavBar menuItems={menuItems} user={user} ></NavBar>
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Diego Ullua e-commerce building
        </p>
      </header>
    </div>
  );
}

export default App;

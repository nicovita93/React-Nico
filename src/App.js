//import logo from './logo.svg';//
import './App.css';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import Contador from './Components/Contador';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <NavBar/>
      <Contador/>
      </div>
  );
}

export default App;

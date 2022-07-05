//import logo from './logo.svg';//
import './App.css';
import NavBar from '../src/Components/NavBar/NavBar';
import Welcome from '../src/Components/Welcome/Welcome';
import Contador from './Components/Counter';
import Container from '../src/Components/Container/Conteiner'

function App() {
  return (
    <div className="App">
      <Welcome/>
      <NavBar/>
      <Container/>
      <Contador/>
      </div>
  );
}

export default App;

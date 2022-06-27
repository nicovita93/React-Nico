//import logo from './logo.svg';//
import './App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import Body from './Components/Body';
import Welcome from './Components/Welcome';
import Contador from './Components/Contador';

function App() {
  return (
    <div className="App">
        <Welcome/>
        <NavBar/>
        <Contador/>
        <Body>
          <Card/>
          <Card/>
        </Body>
    </div>
  );
}

export default App;

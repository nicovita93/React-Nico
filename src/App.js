import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './components/context/cartContext';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
                    <Route path='/category/:categoryId/detail/:detailId' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/*' element={<Navigate to='/' replace />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;

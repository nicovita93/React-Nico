import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header class="navbar">
       <ul>
         <li><a href='./pages/inicio.html'>Inicio</a></li>
          <li><a href='./pages/servicios.html'>Servicios</a></li>
          <li><a href='./pages/nosotros.html'>Nosotros</a></li>
          <li><a href='./pages/cotiza.html'>Cotiza</a></li>
          <li><a href='./pages/normativa.html'>Normativa</a></li>
          <li><a href='./pages/prestamo.html'>Prestamos</a></li>
        </ul>
        <CartWidget/>
    </header>
  );
}

export default NavBar;
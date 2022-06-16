import './NavBar.css';

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
    </header>
  );
}

export default NavBar;
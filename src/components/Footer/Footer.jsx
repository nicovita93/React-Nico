import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from './logo.png'

const Footer = () => {
  return (
    <><footer class="footer">
      <h3><Link to='/'>
		<img src={ logo } className= "logo" alt="logo go shipping"/>
		</Link></h3>
      <h3>Contacto: <a href="mailto:laripapastas@gmail.com">laripapastas@gmail.com</a> </h3>
      <h3>Seguinos en nuestras Redes sociales: <a href="https://www.instagram.com/?hl=es">@laripa.pastascaseras</a></h3>
      <a href="#top">Ir arriba</a>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z" />
      </svg>
      <a class="facebook" href="https://facebook.com">Facebook</a>
      <a class="instagram" href="https://www.instagram.com/?hl=es">Instagram</a>
      <a class="twitter" href="https://twitter.com">Twitter</a>
    </footer><div class="footer-copy">
        <div><p>Copyright &copy; laripa-pastascaseras.com.ar 2022</p></div>
      </div></>
  )
}

export default Footer
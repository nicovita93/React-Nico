import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import CartWidget from '../CartWidget/CartWidget'
import logo from './logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
	<header>
		<Link to='/'>
		<img src={ logo } className= "logo" alt="logo go shipping"/>
		</Link>
		<nav className="navegacion">
			<HashLink to='/#home'><li>inicio</li></HashLink>
			<HashLink to='/#nosotros'><li>nosotros</li></HashLink>
			<HashLink to='/#category'><li>productos</li></HashLink>
		</nav>
	<CartWidget />
	</header>
  )
}

export default NavBar
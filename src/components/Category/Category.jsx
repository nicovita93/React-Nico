import React from 'react';
import todos from '../../assets/images/categorias/todos.png'
import fideos from '../../assets/images/categorias/pasta.png'
import ñoquis from '../../assets/images/categorias/ñoquis.png'
import ravioles from '../../assets/images/categorias/ravioles.png'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = () => {
  return (
    <div className='contenedor-categoria' id='category'>
        <div>
            <Link to='/'>
                <img src={todos} alt="" />
                <h2>Todos</h2>
            </Link>            
        </div>
        <div>
            <Link to='/category/fideos'>
                <img src={fideos} alt="" />
                <h2>Fideos</h2>
            </Link>
        </div>
        <div>
            <Link to='/category/ñoquis'>
                <img src={ñoquis} alt="" />
                <h2 className='stout'>Ñoquis</h2>
            </Link>
        </div>
        <div>
            <Link to='/category/ravioles'>
                <img src={ravioles} alt="" />
                <h2>Ravioles</h2>
            </Link>
        </div>
    </div>
  )
}

export default Category
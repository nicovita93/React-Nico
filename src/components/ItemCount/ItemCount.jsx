import React from 'react'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)

    // Agrega un producto al contador.
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)            
        }
    }

    // Saca un producto del contador si hay más de uno.
    const restar = () => {
        if (count > initial) {
            setCount(count -1)
        }
    }

    const agregarAlCarrito = () => {
        onAdd(count)
        setCambiarBoton(false)
    }

  return (
    <>
        <div className='contenedor-contador'>
            <div className='contenedor-contador-botones'>
                <button className='disminuir-cantidad' onClick={ restar }>-</button>
                <span className='contador'>{ count }</span>
                <button className='aumentar-cantidad' onClick={ sumar }>+</button>
            </div>
            {/* <div className='contenedor-agregar-carrito'> */}
                {cambiarBoton ?
                <button className='agregrar-carrito' onClick={ agregarAlCarrito }>agregar al carrito</button>
            // </div>
                :
                <div className='contenedor-post-agregar-carrito'>
                    <HashLink to='/#home'>
                        <button>seguir comprando</button>
                    </HashLink>
                    <HashLink to='/cart'>
                        <button>terminar compra</button>
                    </HashLink>
                </div>
                }
        </div>
    </>
  )
}

export default ItemCount
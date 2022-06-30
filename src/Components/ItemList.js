import React from 'react'

export const ItemList = ({listadoProductos }) => {
    return (
        <div className='container'>
            <div className='row '>
            {listadoProductos.map((unProducto) => <h1>{unProducto.name}</h1> )}
            </div>
        </div>
    )
}
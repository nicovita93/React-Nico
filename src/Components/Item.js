import React from 'react'

export const Item = ({ name, image, price, id }) => {
    return (
        <div className='col'>Item
            <div className='card'>
            <img src={image} alt={name} className='card img'/>
            
                </div>
        </div>
    )
}
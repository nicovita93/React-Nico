import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../helpers/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {detailId, categoryId } = useParams()
//! Llamada a la api
/* useEffect(() => {
  getProduct
  .then(resp => setProducto(resp.find(producto => producto.id === detailId, categoryId)))
  .catch(err => err)
  .finally( () => setLoading(false))
},[detailId, categoryId]) */

 useEffect (() => {
  const db = getFirestore();

  const pastaRef = doc(db, "pastas", "0V6BlXm1MmzIDosRzSax")

  getDoc(pastaRef).then((snapshot) => {
      if (snapshot.exists()){
        setProducto({...snapshot.data()})
      } 
  })
  }, []) 
 console.log(producto)

  return (
    <>
        <div className="contenedor-items">
            { loading ? 
            <div className='spinner-contenedor'>
                <div className='spinner'>CARGANDO...</div>
            </div>
            :
                <ItemDetail className="contenedor-cards" producto={ producto }/>
            }
        </div>
    </>
  )
}

export default ItemDetailContainer
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../helpers/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {detailId, categoryId } = useParams()
//! Llamada a la api
useEffect(() => {
  getProduct
  .then(resp => setProducto(resp.find(producto => producto.id === detailId, categoryId)))
  .catch(err => err)
  .finally( () => setLoading(false))
},[detailId, categoryId])
// console.log(producto)

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
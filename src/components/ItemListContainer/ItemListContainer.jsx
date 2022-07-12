import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BootsCarousel } from '../Carousel/BootsCarousel'
import Category from '../Category/Category'
import { getProduct } from '../helpers/getProducts'
import ItemList from '../ItemList/ItemList'
import Nosotros from '../Nosotros/Nosotros'
import './ItemListContainer.css'

const ItemListContainer = () => {
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
const {categoryId} = useParams()

  useEffect(() => {
      if (categoryId) {
        getProduct.then( res => {
        return res
        })
        .then( (res) => setProductos(res.filter(categoria => categoria.category === categoryId)))
        .catch( err =>console.log(err))
        .finally(() => setLoading(false))
          
      } else {
          getProduct.then( res => {
            return res
          })
          .then( (res) => setProductos(res))
          .catch( err =>console.log(err))
          .finally(() => setLoading(false))          
      }
  
  }, [categoryId])
  //! Asincronia con async (promesa)
  // try {
    // const consulta = async () => {
    //   let respuestaPoke = await fetch('/DATA.json')
    //   let respuestaPokeParseada = await respuestaPoke.json()
    //   console.log(respuestaPokeParseada.results)
    // }
  // } catch (error) {
  //   console.log(error)
  // }

   //! Promesa
  // useEffect(() => {
  //   let url = '/DATA.json'
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .catch(err => console.log(err))
  //   .then(resp => console.log(resp.results))
  //   //* consulta ()
  // }, [])
  

  return (
    <>
        <div className="contenedor-items" id='home'>
            { loading ? 
            <div className='spinner-contenedor'>
                <div className='spinner'>CARGANDO...</div>
            </div>
            :
            <div>
                <BootsCarousel />                    
                <Nosotros />
                <Category />
                <ItemList productos= { productos } />
            </div>
            }
        </div>
    </>
  )
}

export default ItemListContainer
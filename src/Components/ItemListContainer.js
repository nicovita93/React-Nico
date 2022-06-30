import './ItemListContainer.css';
import { listadoProductos } from '../../data/asyncMock'
import { useEffect } from 'react';
import { ItemList } from './ItemList';

function ItemListContainer() {

  const [productos, setProductos] = useState ([])

  const getProductos = () =>  {
    return new Promise((resolve,reject) => {
      setTimeout (() => {
        listadoProductos.lenght > 0 ?
          resolve(listadoProductos)
          :
          reject("No hay datos")
        },2000);
      }
    )
 }
  useEffect(() => {
    getProductos()
    .then(res => setProductos(res))
    .catch(err => console.log(err))
  }, [])
 
    return (
      <><p>Eige los productos que quieras de esta pagina </p>
      <ItemList listadoProductos={productos}/></>
     );
 }; 
export default ItemListContainer;
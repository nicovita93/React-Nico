import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ producto}) => {
  return (
    <div className='tarjeta'>
                <div className='tarjeta-img'>
                    <img src={ producto.pictureURL } alt="" />
                </div>
                <div>
                    <h3 className='titulo-producto'>
                        { producto.title }
                </h3>
                </div>
                <span className='producto-stock'>
                    stock: { producto.stock }
                </span>
                <div className='producto-descripcion'>
                    <Link to={`detail/${producto.id}`}>
                    <button className='producto-detalles-boton'>
                        más detalles
                    </button>
                    </Link>
                </div>
            </div>
  )
}

export default Item
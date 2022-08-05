import fideosCinta from '../../assets/images/fideos/fideos1.jpg'
import fideosTallarin from '../../assets/images/fideos/fideos2.jpg'
import raviolesVerdura from '../../assets/images/ravioles/ravioles1.jpg'
import raviolesCalabaza from '../../assets/images/ravioles/ravioles2.jpg'
import ñoquisPapa from '../../assets/images/ñoquis/ñoquis1.jpg'
import ñoquisVerdura from '../../assets/images/ñoquis/ñoquis1.jpg'
import ñoquisTricolor from '../../assets/images/ñoquis/ñoquis1.jpg'

const productos = [
    {id: '1', category:'fideos', title: 'Cinta', description: 'Fideos cinta, puedes elegir de espinaca, blancos o rojos', price: '330/kg', pictureURL: fideosCinta, stock: 35},
    {id: '2', category:'fideos', title: 'Tallarin', description: 'Fideos Tallarin, puedes elegir de espinaca, blancos o rojos', price: '340/kg', pictureURL: fideosTallarin, stock: 35},
    {id: '3', category:'ravioles', title: 'Ravioles de verdura', description: 'Ravioles frescos relleno de verdura y ricota.', price: '600/kg', pictureURL: raviolesVerdura, stock: 15},
    {id: '4', category:'ravioles', title: 'Ravioles de calabaza', description: 'Ravioles frescos relleno de calabaza y queso mozzarella.', price: '650/kg', pictureURL:raviolesCalabaza, stock: 10},
    {id: '5', category:'ñoquis', title: 'Ñoquis de papa', description: 'Ñoquis tradicionales de papa hechos a mano', price: '400/kg', pictureURL: ñoquisPapa, stock: 20},
    {id: '6', category:'ñoquis', title: 'Ñoquis de verdura', description: 'Variante de ñoquis caseros, con agregado de verdura', price: '430/kg', pictureURL: ñoquisVerdura, stock: 16},
    {id: '7', category:'ñoquis', title: 'Ñoquis tricolor', description: 'Ñoquis de papas, verdura y calabaza', price: '450/kg', pictureURL: ñoquisTricolor, stock: 15},
]

export const getProduct = new Promise ( resolve => {
    setTimeout ( ()=> {
        resolve(productos)
    }, 2000)
})
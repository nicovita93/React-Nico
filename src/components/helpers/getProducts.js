import fideosCinta from '../../assets/images/fideos/fideos1.jpg'
import fideosTallarin from '../../assets/images/fideos/fideos2.jpg'


const productos = [
    {id: '1', category:'fideos', title: 'Cinta', description: 'Fideos cinta, puedes elegir de espinaca, blancos o rojos', price: '330/kg', pictureURL: fideosCinta, stock: 35},
    {id: '2', category:'fideos', title: 'Tallarin', description: 'Fideos Tallarin, puedes elegir de espinaca, blancos o rojos', price: '340/kg', pictureURL: fideosTallarin, stock: 35},
]

export const getProduct = new Promise ( resolve => {
    setTimeout ( ()=> {
        resolve(productos)
    }, 2000)
})
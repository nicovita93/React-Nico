import './Body.css';
import Card from './Card'

function Body({children}) {
  return (
    <section classname="cuerpo">
        {children}
        <Card product='Birome' price='$150'/>
        <Card product='Remera' price='$2500'/>
        <Card product='Mouse' price='$1500'/>
        <Card product='Cuaderno' price='$500'/>
    </section>
  );
}

export default Body;
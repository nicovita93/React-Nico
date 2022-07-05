import './Conteiner.css'

const Conteiner = async () => {
    fetch('../data.json')
    .then(response => response.json())
    .then(data => console.log(data));
}

export default Conteiner;
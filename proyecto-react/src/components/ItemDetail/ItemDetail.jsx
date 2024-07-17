import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const itemDetail = ({id, nombre, img, categoria, descripcion, precio, stock }) => {
    return (
        <article className= "CardItem">
        <header className= "Header">
            <h3 className= "ItemHeader">
                {nombre}
            </h3>
        </header>
        <picture>
            <img src={img} alt={nombre} className= "ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {categoria}
            </p>
            <p className="Info">
                Descripcion: {descripcion}
            </p>
            <p className="Info">
                Precio: {precio}
            </p>
        </section>
        <footer className="ItemFooter">
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}></ItemCount>
        </footer>
    </article>
    )
}

export default itemDetail
import './Item.css'
import { NavLink, Link} from 'react-router-dom'

const Item = ({id, nombre, img, precio, stock}) => {
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
                    Precio: ${precio}
                </p>
                <p className="Info">
                    stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'> ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item
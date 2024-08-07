import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'

const itemDetail = ({id, nombre, img, categoria, descripcion, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

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
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </footer>
    </article>
    )
}

export default itemDetail
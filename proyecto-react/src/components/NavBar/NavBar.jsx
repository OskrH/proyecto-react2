import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Pc Build</h3>
            <div>
                <button> Monitores </button>
                <button> Teclados </button>
                <button> Mouse </button>
                <button> Audifonos </button>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar
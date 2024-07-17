const products = [
    {
        id: '1',
    nombre: 'Memoria Ram DDR4 8GB 3200MT/s XPG SPECTRIX D35G RGB, CL16, UDIMM, 1.35V, Black',
    precio: 22.995,
    categoria: 'RAM',
    img: 'https://media.spdigital.cl/thumbnails/products/afpx1zur_093dee38_thumbnail_256.png',
    stock: 30,
    descripcion: 'memoria ram'
    },
    { id: '2',
    nombre: 'Tarjeta de Video ASUS Dual Nvidia® GeForce® RTX™ 4060 Ti OC Edition, 8GB GDDR6, 128-bit, PCIe 4.0',
    precio: 470.995,
    categoria: 'TARJETA DE VIDEO',
    img: 'https://media.spdigital.cl/thumbnails/products/jbc30zul_7c0797a8_thumbnail_512.jpg',
    stock: 20,
    descripcion: 'tarjeta de video nvidia'
    },
    { id: '3',
    nombre: 'Procesador Intel® Core™ i7-12700K, 12º Gen 3.6GHz (Hasta 5.0GHz), Socket LGA1700, con Gráficas',
    precio: 344.755,
    categoria: 'PROCESADORES',
    img: 'https://media.spdigital.cl/thumbnails/products/gxiy0or4_99aa7f89_thumbnail_512.jpg',
    stock: 50,
    descripcion: 'procesador intel'
    },
    { id: '4',
    nombre: 'Unidad SSD Crucial P3 4TB, PCIe M.2 (2280), NVMe PCIe Gen3x4, Lectura 3500MB/s, Escritura 3000MB/s',
    precio: 303.045,
    categoria: 'ALMACENAMIENTO',
    img: 'https://media.spdigital.cl/thumbnails/products/jr31fqhh_b3300a2b_thumbnail_512.jpg',
    stock: 35,
    descripcion: 'unidad de estado solido'
    },
    { id: '5',
    nombre: 'Placa Madre Gigabyte A620M Gaming X, AMD AM5, 4xDDR5 DIMM, DP, HDMI, 1 x M.2, 4 x SATA, Micro-ATX',
    precio: 156.745,
    categoria: 'PLACA MADRE',
    img: 'https://media.spdigital.cl/thumbnails/products/x927y_7w_70858c6d_thumbnail_512.png',
    stock: 150,
    descripcion: 'placa madre gigabyte'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoria))
        }, 500)
    })
}

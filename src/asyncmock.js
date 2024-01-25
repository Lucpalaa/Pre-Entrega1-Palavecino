const productos = [
    {id: "1", nombre: "Zapas1", precio: 500, img: "../img/zapas.jpg", idCat: "2", stock: 100},
    {id: "2", nombre: "Zapas2", precio: 600, img: "../img/zapas.jpg", idCat: "2", stock: 100},
    {id: "3", nombre: "Zapas3", precio: 700, img: "../img/zapas.jpg", idCat: "3", stock: 100},
    {id: "4", nombre: "Zapas4", precio: 800, img: "../img/zapas.jpg", idCat: "3", stock: 100}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}
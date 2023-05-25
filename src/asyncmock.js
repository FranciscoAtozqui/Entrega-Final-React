const productos = [
    { nombre: "Tarjeta", precio: 60000, id: "1", img: "../img/tarjeta.jpg", idCat: "3" },
    { nombre: "Gabinete", precio: 40000, id: "2", img: "../img/gabinete.jpg", idCat: "3" },
    { nombre: "Teclado", precio: 25000, id: "3", img: "../img/teclado.jpg", idCat: "2" },
    { nombre: "Mouse", precio: 15000, id: "4", img: "../img/mouse.jpg", idCat: "2" },
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//retorno de un solo Item:

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}
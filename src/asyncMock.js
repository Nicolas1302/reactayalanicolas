const products = [
    { 
        id: '1', 
        name: 'caño cobre', 
        price: 15000, 
        category: 'caños', 
        img:'https://http2.mlstatic.com/D_NQ_NP_665658-MLA53273112030_012023-O.webp', 
        stock: 25, 
        description:'Caño de Cobre Precio por 3 Metros'
    },
    { id: '2', name: 'Mensula 42cm', price: 3000, category: 'mensulas', img:'https://http2.mlstatic.com/D_NQ_NP_775229-MLA51949434260_102022-O.webp', stock: 0, description:'Mensula de 42 Centimetros'},
    { id: '3', name: 'Caño Cristal', price: 1200, category: 'caños', img:'https://http2.mlstatic.com/D_NQ_NP_799463-MLA47308835503_082021-O.webp', stock: 10, description:'Caño Cristal precio Por Metro'},
    { id: '4', name: 'Capacitor Ventilador', price: 1000, category: 'capacitores', img:'https://http2.mlstatic.com/D_NQ_NP_821217-MLA53825596600_022023-O.webp', stock: 16, description:'Capacitor de Trabajo motor de ventilador'},
    { id: '5', name: 'Capacitor Aire Acondicionado', price: 1200, category: 'capacitores', img:'https://http2.mlstatic.com/D_NQ_NP_686643-MLA52766333731_122022-O.webp', stock: 10, description:'Capacitor de 25MF de Aire Acondicionado'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
import cartDao from "../persistence/DAOs/cartsFactory.js"

export const addToCart = async (query) => {
     const cart = await cartDao.addToCart(query)
     return cart
}

export const getCart = async (query) => {
     const cart = await cartDao.getCart(query)
     return cart
}
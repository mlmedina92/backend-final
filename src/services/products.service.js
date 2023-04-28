import prodsDao from "../persistence/DAOs/productsFactory.js"

export const get = async (query) => {
     const prods = await prodsDao.get(query)
     return prods
}

export const getById = async (id) => {
     const prods = await prodsDao.getById(id)
     return prods
}
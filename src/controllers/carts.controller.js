import { addTo, deleteFrom, get } from '../services/carts.service.js'

export const addToCart = async (req, res) => {
    const resp = await addTo({...req.params, ...req.body})
     res.json(resp)

}

export const deleteFromCart = async (req, res) => {
    const resp = await deleteFrom(req.params)
    res.json(resp)
}

export const getCart = async (req, res) => {
    const resp = await get(req.params)
    res.json(resp)
}
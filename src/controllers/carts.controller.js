import { addToCart, getCart } from '../services/carts.service.js'

export const addToCart = async (req, res) => {
    const resp = await addToCart(req.query)
    res.json(resp)
}

export const getCart = async (req, res) => {
    const resp = await getCart(req.query)
    res.json(resp)
}
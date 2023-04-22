import { get } from '../services/products.service.js'

export const getAll = async (req, res) => {
    const resp = await get(req.query)
    res.json(resp)
}
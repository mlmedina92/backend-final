import { get, getById } from '../services/products.service.js'

export const getAll = async (req, res) => {
    const resp = await get(req.query)
    res.json(resp)
}

export const getByCode = async (req, res) => {
    const resp = await getById(req.params)
    res.json(resp)
}
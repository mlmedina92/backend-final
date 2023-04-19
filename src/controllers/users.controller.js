import { login, create } from '../services/users.service.js'

export const loginUser = async (req, res) => {
    const usersObj = req.body
    const user = await login(usersObj)
    res.json({ message: 'User logged', user })
}

export const createUser = async (req, res) => {
    const usersObj = req.body
    const newUser = await create(usersObj)
    res.json({ message: 'user created', user: newUser })

}
import { login, create } from '../services/users.service.js'

export const loginUser = async (req, res) => {
    const usersObj = req.body
    const userLogged = await login(usersObj)
    if (userLogged) {
        req.session.email = userLogged.user.email //creo sesion
        req.session.password = userLogged.user.password //creo sesion
        req.session.userName = userLogged.user.full_name
        req.session.cartId = userLogged.user.cartId
        req.session.role = userLogged.user.role
        res.cookie('token', userLogged.token, { httpOnly: true })
            .redirect('/') //redireccion a home, httpOnly hace que la info del token no pueda ser extraido en el front
        // res.json({ message: 'User logged', user })
    } else {
        res.redirect('/users/errorLogin')// si no exite lo lleva a otra vista
    }
}

export const createUser = async (req, res) => {
    const usersObj = req.body
    const newUser = await create(usersObj)
    if (newUser) {
        res.redirect('/')
        // res.json({ message: 'user created', user: newUser })
    } else {
        res.redirect('/users/errorRegistro')
    }
}

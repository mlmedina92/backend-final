// archivo para el renderizzado de VISTAS
import { Router } from "express"; //importo router

const router = Router()

router.get('/', async (req, res) => { // si llamo al slash views renderio formualrio
    // si el us no esta logeado
    if (req.session && !req.session.email) {
        res.redirect('/users/login')//redireccion a vista de login
    } else {
        const baseUrl = req.protocol + '://' + req.get('host')
        const prods = await fetch(baseUrl + '/api/products')
        const dataProds = await prods.json()
        res.render('productsList', { 'prods': dataProds.payload, 'isAdminRole': req.session.role == 'admin', 'userName': req.session.userName, 'cartId': req.session.cartId })//cdo estoy en / se va a renderizar el handlebars home
    }
})

export default router 
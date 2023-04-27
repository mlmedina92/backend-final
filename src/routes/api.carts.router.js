import { Router } from "express";
import { addToCart, getCart } from '../controllers/carts.controller.js'

const router = Router()

router.post('/:cid/products/:pid', addToCart)
router.get('/:cid', getCart)

// router.post('/:cid/products/:pid', async (req, res) => {
//     // si el us no esta logeado
//     if (req.session && !req.session.email) {
//         res.redirect('/users/login')//redireccion a vista de login
//     } else {
//         const { cid, pid } = req.params//recibe inf por params 
//         const { quantity } = req.body//recibe inf por body
//         // const cart = await cm.addToCart(cid, pid, parseInt(quantity))
//         // res.status(200).json({ message: 'Carrito actualizado ', cart: cart })
//         const cart = await fetch('/api/carts');
//         const dataProds = await prods.json()
//         res.render('productsList', { 'prods': dataProds.payload, 'isAdminRole': req.session.role == 'admin', 'userName': req.session.userName, 'cartId': req.session.cartId })//cdo estoy en / se va a renderizar el handlebars home
//     }
// })

export default router
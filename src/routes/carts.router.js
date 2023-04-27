import { Router } from "express";

const router = Router()

// renderiza carrito
router.get('/', async (req, res) => { // si llamo al slash views renderio formualrio
    // si el us no esta logeado
    if (req.session && !req.session.email) {
        res.redirect('/users/login')//redireccion a vista de login
    } else {
        const cart = await fetch(`/api/carts/${req.session.cartId}`);
        const dataCart = await cart.json()
        res.render('cart', { 'prods': dataCart.payload, 'userName': req.session.userName, 'cartId': req.session.cartId })//cdo estoy en / se va a renderizar el handlebars home
    }
})

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

// /*
// {
//     id: 0, autoincremental como los productos
//     products: [
//         {
//             quantity: number,
//             product: { objeto tipo producto }
//         }
//     ]
// }
// */

// //ruta para eliminar un producto de un carrito en particular:
// router.delete('/:cid/products/:pid', async (req, res) => {
//     const { cid, pid } = req.params//recibe inf por params: id del carrito y id del producto
//     const cart = await cm.deleteFromCart(cid, pid)
//     res.status(200).json({ message: 'Carrito actualizado ', cart: cart })
// })

export default router
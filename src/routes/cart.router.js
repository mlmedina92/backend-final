import { Router } from "express";

const router = Router()

// renderiza carrito
router.get('/', async (req, res) => { // si llamo al slash views renderio formualrio
    // si el us no esta logeado
    if (req.session && !req.session.email) {
        res.redirect('/users/login')//redireccion a vista de login
    } else {
        const baseUrl = req.protocol + '://' + req.get('host')
        const cartApi = await fetch(baseUrl + `/api/carts/${req.session.cartId}`)
        const dataCart = await cartApi.json()
        let items = []
        for (const item of dataCart.products) {
            const prod = await fetch(baseUrl + `/api/products/${item.productId}`)
            const prodData = await prod.json()
            items.push({...prodData, 'quantity': item.quantity})
        }
        res.render('carts', { 'prods': items, 'userName': req.session.userName, 'cartId': req.session.cartId })
    }
})

export default router
import { addTo, deleteFrom, get } from '../services/carts.service.js'

export const addToCart = async (req, res) => {
    const resp = await addTo({ ...req.params, ...req.body })
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

export const purchaseCart = async (req, res) => {
    try {
        // TODO
        // - get cart products
        // - validate stock
        //   - if stock >= quantity  =>  decrease product stock
        //   - else  =>  remove from cart  =>  save on array removed prods from cart
        // - return tkt with full cart information and removed prods
        // - keep on cart the removed prods

        const baseUrl = req.protocol + '://' + req.get('host')
        const cartApi = await fetch(baseUrl + `/api/carts/${req.session.cartId}`) // obtengo el carrito
        const dataCart = await cartApi.json()
        let total = 0
        let items = [] // items con stock suficiente
        let woStockItems = [] // items del carrito sin stock suficiente
        for (const item of dataCart.products) {
            const prod = await fetch(baseUrl + `/api/products/${item.productId}`) // obtengo todos los datos de los prods del carrito
            const prodData = await prod.json()
            const subtotal = prodData.price * item.quantity
            if (prodData.stock >= item.quantity) { // si hay stock suficiente
                // llamo a la api para actualizar stock
                await fetch(baseUrl + `/api/products/${item.productId}`,
                    {
                        method: 'PUT',
                        headers: {
                            "Access-Control-Allow-Methods": "*",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({...prodData, 'stock': (prodData.stock - item.quantity)})
                    })
                total += subtotal
                items.push({ ...prodData, 'quantity': item.quantity, 'subtotal': subtotal })
            } else {
                woStockItems.push({ ...prodData, 'quantity': item.quantity, 'subtotal': subtotal })
            }
        }

        let sucess
        if (items.length > 0) { // se puede finalizar compras
            // TODO await fetch(baseUrl + `/api/tickets`, POST) // crear ticket
            sucess = true
        } else {
            sucess = false
        }

        if (woStockItems.length > 0) { // productos sin stock que no se pudieron comprar

        }

        // const resp = await purchase(req.params)
        // res.json(resp)
        return { 'sucess': sucess }
    } catch (err) {
        console.log(err);
    }
}
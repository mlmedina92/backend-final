import { cartsModel } from "../../mongo/models/carts.model.js";

export default class CartManager {
  async createCart() {
    try {
      const cart = await cartsModel.create({
        products: [],
      });
      return cart;
    } catch (err) {
      console.log(err);
    }
  }

  async getCartById(id) {
    try {
      const cart = await cartsModel.findById(id);
      return cart;
    } catch (err) {
      console.log(err);
    }
  }

  async addToCart({cid, pid, quantity}) {
    try {
      const cart = await cartsModel.findById(cid);

      // me fijo si el carrito esta creado
      if (!!cart) {

        const prod = cart.products.find(e => e.productId === pid)

        // despues me fijo que el producto ya exista en el carrito
        if (!!prod) {
          const update = cart.products.map(prod => {
            if (prod.productId == pid) {
              prod.quantity += quantity
            }
            return prod
          })
          return await cartsModel.findByIdAndUpdate(cid, { products: update })
        } else {
          await cartsModel.findOneAndUpdate(
            { _id: cid },
            { $push: { products: { productId: pid, quantity: quantity } } }
          );
          return { sucess: true }
        }
      } else {
        return { error: "Carrito no encontrado" };
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteFromCart({cid, pid}) {
    try {
      const cart = await cartsModel.findById(cid);

      // me fijo si el carrito esta creado
      if (!!cart) {
        cart.products.deleteOne(pid)
      }

      return true
    } catch (error) {
      console.log(err);
    }
  }
}

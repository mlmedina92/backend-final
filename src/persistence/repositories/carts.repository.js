import BasicProductDTO from "../DTOs/products/basicProduct.dto.js";

export default class CartsRepository{
    constructor(dao){
        this.dao=dao
    }

    async addToCart(item){
        const itemToAdd=new ItemToAddDTO(item)
        const cartRes = await this.dao.addToCart(itemToAdd)
        if (cartRes) { //si el us existe ccreo esas sesiones
            return cartRes
        }else{
            return null
        }
    }

    async getCart(query){
        const cartDAO= await this.dao.getCartById(query)
        let cart = []
        cartDAO.payload.forEach(prod => {
            cart.push(new BasicProductDTO(prod))
        });
    
        return {...cartDAO, 'payload': cart}
    }
}
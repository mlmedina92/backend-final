import BasicProductDTO from "../DTOs/products/basicProduct.dto.js";

export default class ProductsRepository{
    constructor(dao){
        this.dao=dao
    }
    async get(query){
        const prodsDAO= await this.dao.getProducts(query)
        let prods = []
        prodsDAO.payload.forEach(prod => {
            prods.push(new BasicProductDTO(prod))
        });
    
        return {...prodsDAO, 'payload': prods}
    }
}
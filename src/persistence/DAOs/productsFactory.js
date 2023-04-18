import config from '../../config.js'
import ProductsFile from './productsDAOs/productsFile.js'
// import ProductsMongo from './productsDAOs/productsMongo.js'
import ProductsRepository from '../repositories/products.repository.js'

let productsDao
console.log(config.persistence);

switch (config.persistence) {
    case 'MONGO':
        await import('../mongo/configMongo.js')
        const { default: productsMongo } = await import('./productsDAOs/productsMongo.js')
        productsDao = new ProductsRepository(productsMongo)
        break;

    case 'FILE':
        productsDao = new ProductsFile()
        break;
}

export default productsDao
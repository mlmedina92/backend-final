import config from '../../config.js'
import CartsFile from './cartsDAOs/cartsFile.js'
// import CartsMongo from './cartsDAOs/cartsMongo.js'
import CartsRepository from '../repositories/carts.repository.js'

let cartDao
console.log(config.persistence);

switch (config.persistence) {
    case 'MONGO':
        await import('../mongo/configMongo.js')
        const { default: cartsMongo } = await import('./cartsDAOs/cartsMongo.js')
        cartDao = new CartsRepository(cartsMongo)
        break;

    case 'FILE':
        cartDao = new CartsFile()
        break;
}

export default cartDao
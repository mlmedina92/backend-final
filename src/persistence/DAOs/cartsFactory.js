import config from '../../config.js'
import CartsFile from './cartsDAOs/cartsFile.js'
// import CartsMongo from './cartsDAOs/cartsMongo.js'
import CartsRepository from '../repositories/carts.repository.js'

let cartsDao
console.log(config.persistence);

switch (config.persistence) {
    case 'MONGO':
        await import('../mongo/configMongo.js')
        const { default: cartsMongo } = await import('./cartsDAOs/cartsMongo.js')
        cartsDao = new CartsRepository(cartsMongo)
        break;

    case 'FILE':
        cartsDao = new CartsFile()
        break;
}

export default cartsDao
import { Router } from "express";//para crear rutas fuera de server
// import socketServer from '../server.js'
import { getAll, getByCode, addProd, updateProd, deleteProd } from '../controllers/products.controller.js'

const router = Router()

router.get('/', getAll)
router.get('/:pid', getByCode)

router.post('/', addProd)
/* ejemplo de body para llamar al post
{
    "title": "Pizza de Prueba",
    "description": "Pizza de prueba para agregar, editar y borrar",
    "code": "pizza-test",
    "price": 333,
    "stock": 8,
    "category": "pizzas",
    "thumbnails": ["https://pierorestaurante.com/wp-content/uploads/2018/11/Pizza_margarita_receta_plato_opt-1.jpg","https://pierorestaurante.com/wp-content/uploads/2018/11/Pizza_margarita_receta_plato_opt-1.jpg"]
  }
*/

router.put('/', updateProd)
/* ejemplo de body para llamar al put
{
"id": 5,
"data": {
    "title": "jabon ala plus",
    "description": "jabon ala plus",
    "code": "jabon-plus",
    "price": 1,
    "status": false,
    "stock": 0,
    "category": "productos1",
    "thumbnails": ["imagen1.png","imagen2.png"]
  }
}
*/

router.delete('/', deleteProd)
/* ejemplo de body para llamar al delete
{
    "id": "64504a485925026d36de8766"
  }
*/

export default router
import { Router } from 'express';
import {
  getProducts,
//   getProductById,
  addProduct,
//   updateProduct,
//   deleteProduct
} from '../controllers/productController';

const router = Router();

// Definir as rotas e associar aos controladores
router.get('/', getProducts);
// router.get('/:id', getProductById);
router.post('/', addProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

export default router;

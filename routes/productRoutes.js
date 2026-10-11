const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  updateStock,
  deleteProduct,
  getLowStockReport,
  getCategorySummary,
} = require('../controllers/productController');

// Static routes must come before dynamic parameter routes like /:id
router.get('/low-stock', getLowStockReport);
router.get('/summary', getCategorySummary);

router.route('/').get(getProducts).post(createProduct);

router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

router.patch('/:id/stock', updateStock);

module.exports = router;
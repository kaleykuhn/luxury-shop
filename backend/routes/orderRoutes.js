import express from 'express';
const router = express.Router();
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
//make sure this is at the bottom line of routes or it will try by id
router.route('/:id').get(protect, getOrderById);

export default router;

import { Router } from 'express';
import { GoodsController } from '../controllers/goods.controller.js';

const router = Router();

router.post('/create', GoodsController.createGoods);
router.get('/', GoodsController.getGoods);
router.get('/:goodsId', GoodsController.getGoodsById);
router.put('/:goodsId', GoodsController.updateGoods);
router.delete('/:goodsId', GoodsController.deleteGoods);

export default router;
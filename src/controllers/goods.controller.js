import { GoodsService } from '../services/goods.service.js';

export class GoodsController {
  static async createGoods(req, res) {
    try {
      const goodsData = req.body;
      const goods = await GoodsService.createGoods(goodsData);
      return res.status(201).json(goods);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create goods', error });
    }
  }

  static async getGoods(req, res) {
    try {
      const goods = await GoodsService.getGoods();
      return res.json(goods);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch goods', error });
    }
  }

  static async getGoodsById(req, res) {
    try {
      const goodsId = req.params.goodsId;
      const goods = await GoodsService.getGoodsById(goodsId);
      if (!goods) {
        return res.status(404).json({ message: 'Goods not found' });
      }
      return res.json(goods);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch goods', error });
    }
  }

  static async updateGoods(req, res) {
    try {
      const goodsId = req.params.goodsId;
      const updateData = req.body;
      const updatedGoods = await GoodsService.updateGoods(goodsId, updateData);
      if (!updatedGoods) {
        return res.status(404).json({ message: 'Goods not found' });
      }
      return res.json(updatedGoods);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to update goods', error });
    }
  }

  static async deleteGoods(req, res) {
    try {
      const goodsId = req.params.goodsId;
      const result = await GoodsService.deleteGoods(goodsId);
      if (!result) {
        return res.status(404).json({ message: 'Goods not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Failed to delete goods', error });
    }
  }
}
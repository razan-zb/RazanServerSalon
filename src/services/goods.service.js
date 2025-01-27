import { GoodsDal } from '../dal/goods.dal.js';

export class GoodsService {
  static async createGoods(goodsData) {
    return GoodsDal.createGoods(goodsData);
  }

  static async getGoods() {
    return GoodsDal.getGoods();
  }

  static async getGoodsById(goodsId) {
    return GoodsDal.getGoodsById(goodsId);
  }

  static async updateGoods(goodsId, updateData) {
    return GoodsDal.updateGoods(goodsId, updateData);
  }

  static async deleteGoods(goodsId) {
    return GoodsDal.deleteGoods(goodsId);
  }
}
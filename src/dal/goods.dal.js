import Goods from '../db/models/goods.js';

export class GoodsDal {
  static async createGoods(goodsData) {
    const goods = new Goods(goodsData);
    return goods.save();
  }

  static async getGoods() {
    return Goods.find();
  }

  static async getGoodsById(goodsId) {
    return Goods.findById(goodsId);
  }

  static async updateGoods(goodsId, updateData) {
    return Goods.findByIdAndUpdate(goodsId, updateData, {
      new: true,
      runValidators: true,
    });
  }

  static async deleteGoods(goodsId) {
    return Goods.findByIdAndDelete(goodsId);
  }
}
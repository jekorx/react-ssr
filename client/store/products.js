import {
  observable,
  computed,
  action
} from 'mobx'

export default class Products {
  constructor ({ products, word, stock } = { products: '', word: '', stock: false }) {
    this.products = products ? JSON.parse(products) : []
    this.keyword = word
    this.isStock = stock
  }

  @observable products

  @observable keyword

  @observable isStock

  @computed get filter () {
    return this.products.map((p) => {
      const isInclude = p.category.includes(this.keyword)
      if (this.isStock) {
        return p.stocked && isInclude
      }
      return isInclude
    })
  }

  @action setSearch (word) {
    this.keyword = word
  }

  @action setStock (stock) {
    this.isStock = stock
  }

  @action setProducts (products) {
    this.products = products
  }

  toJson () {
    return {
      products: JSON.stringify(this.products),
      keyword: this.keyword,
      isStock: this.isStock
    }
  }
}

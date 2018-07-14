import {
  observable,
  computed,
  action
} from 'mobx'

export default class Products {
  constructor ({ products, word, stock } = { products: '', word: '', stock: false }) {
    this.data = products ? JSON.parse(products) : []
    this.keyword = word || ''
    this.isStock = stock || false
  }

  @observable data

  @observable keyword

  @observable isStock

  @computed get filter () {
    return this.data.filter((p) => {
      if (p.name.includes(this.keyword)) {
        if (this.isStock) return p.stocked
        return true
      }
      return false
    })
  }

  @action setSearch (word) {
    this.keyword = word
  }

  @action setStock (stock) {
    this.isStock = stock
  }

  @action setProducts (products) {
    this.data = products
  }

  toJson () {
    return {
      products: JSON.stringify(this.data),
      keyword: this.keyword,
      stock: this.isStock
    }
  }
}

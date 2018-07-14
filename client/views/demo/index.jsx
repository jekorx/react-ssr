import React from 'react'
import {
  inject,
  observer
} from 'mobx-react'
import PropTypes from 'prop-types'
import Products from '../../store/products'
import Search from './search'
import Table from './table'

const productsData = [
  {
    category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'
  }, {
    category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'
  }, {
    category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'
  }, {
    category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'
  }, {
    category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'
  }, {
    category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'
  }
]

@inject('products')
@observer
export default class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchWord: '',
      stock: false
    }
    this.onFilterTextInput = this.onFilterTextInput.bind(this)
    this.onStockChange = this.onStockChange.bind(this)
    this.bootstrap = this.bootstrap.bind(this)
  }

  onFilterTextInput (value) {
    this.setState({
      searchWord: value
    })
    this.props.products.setSearch(value)
  }

  onStockChange (value) {
    this.setState({
      stock: value
    })
    this.props.products.setStock(value)
  }

  bootstrap () {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.products.setProducts(productsData)
        resolve(true)
      }, 3000)
    })
  }

  render () {
    return (
      <div>
        <Search
          searchWord={this.state.searchWord}
          stock={this.state.stock}
          onFilterTextInput={this.onFilterTextInput}
          onStockChange={this.onStockChange}
        />
        <Table products={this.props.products.filter} />
      </div>
    )
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.instanceOf(Products)
}

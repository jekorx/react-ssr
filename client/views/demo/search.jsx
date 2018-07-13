import React from 'react'
import PropTypes from 'prop-types'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.handleTextInputChange = this.handleTextInputChange.bind(this)
    this.handleStockChange = this.handleStockChange.bind(this)
  }

  handleTextInputChange (e) {
    this.props.onFilterTextInput(e.target.value)
  }

  handleStockChange (e) {
    this.props.onStockChange(e.target.checked)
  }

  render () {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchWord}
          onChange={this.handleTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.stock}
            onChange={this.handleStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

Search.propTypes = {
  searchWord: PropTypes.string,
  stock: PropTypes.bool,
  onFilterTextInput: PropTypes.func,
  onStockChange: PropTypes.func
}

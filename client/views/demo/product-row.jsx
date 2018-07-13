import React from 'react'
import PropTypes from 'prop-types'

export default class ProductRow extends React.Component {
  render () {
    const p = this.props.product
    const name = p.stocked
      ? p.name
      : <span style={{ color: 'red' }}>{p.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{p.price}</td>
      </tr>
    )
  }
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string
  })
}

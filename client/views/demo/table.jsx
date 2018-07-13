import React from 'react'
import PropTypes from 'prop-types'
import CategoryRow from './category-row'
import ProductRow from './product-row'

export default class Table extends React.Component {
  render () {
    const row = []
    let lastCategory = ''
    this.props.products.forEach((p) => {
      if (p.category !== lastCategory) {
        row.push(<CategoryRow category={p.category} key={p.category} />)
      }
      row.push(<ProductRow product={p} key={p.name} />)
      lastCategory = p.category
    })
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    )
  }
}

Table.propTypes = {
  products: PropTypes.array
}

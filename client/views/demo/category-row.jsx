import React from 'react'
import PropTypes from 'prop-types'

export default class CategoryRow extends React.Component {
  render () {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    )
  }
}

CategoryRow.propTypes = {
  category: PropTypes.string
}

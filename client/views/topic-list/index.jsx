import React from 'react'
import {
  observer,
  inject
} from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store'

@inject('appState')
@observer
export default class TopicList extends React.Component {
  constructor () {
    super()
    this.changeName = this.changeName.bind(this)
  }

  changeName (e) {
    this.props.appState.changeName(e.target.value)
  }

  render () {
    const { msg } = this.props.appState
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{msg}</span>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

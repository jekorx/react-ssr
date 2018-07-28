import React from 'react'
import {
  observer,
  inject
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AppState from '../../store/app-state'

@inject('appState')
@observer
export default class TopicList extends React.Component {
  constructor () {
    super()
    this.changeName = this.changeName.bind(this)
  }

  bootstrap () {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.changeName('1123')
        resolve(true)
      }, 1000)
    })
  }

  changeName (e) {
    this.props.appState.changeName(e.target.value)
  }

  render () {
    const { msg } = this.props.appState
    return (
      <div>
        <Helmet>
          <title>This is topic list page.</title>
          <meta name="description" content="This is description." />
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <span>{msg}</span>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

import React from 'react'
import {
  Link
} from 'react-router-dom'
import Routes from '../route'

export default class App extends React.Component {
  render () {
    return [
      <div key="links">
        <Link to="/">首页</Link>
        <br />
        <Link to="/detail">详情</Link>
      </div>,
      <Routes key="routes" />
    ]
  }
}

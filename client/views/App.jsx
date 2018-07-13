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
        <Link to="/detail">详情</Link>
        <Link to="/test">test</Link>
        <Link to="/demo">demo</Link>
      </div>,
      <Routes key="routes" />
    ]
  }
}

import React from 'react'
import axios from 'axios'

/* eslint-disable */
export default class TestApi extends React.Component {
  constructor () {
    super()
    this.login = this.login.bind(this)
    this.inputAccessToken = this.inputAccessToken.bind(this)
    this.state = {
      accessToken: ''
    }
  }

  getTopics () {
    axios.get('/api/topics')
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }

  login () {
    if (!this.state.accessToken) {
      alert('Please input the accessToken!')
      return false
    }
    axios.post('/api/user/login', {
      accessToken: this.state.accessToken
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  markAll () {
    axios.post('/api/message/mark_all?needAccessToken=true')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  inputAccessToken (e) {
    this.setState({
      accessToken: e.target.value
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <input type="text" onChange={this.inputAccessToken} />
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}
/* eslint-endisable */

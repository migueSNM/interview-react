import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../actions'

const LoginPage = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(updateUser(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default connect()(LoginPage)

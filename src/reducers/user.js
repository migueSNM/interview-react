const user = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return ({
            name: action.name,
          })
      default:
        return state
    }

  }
  
  export default user
  
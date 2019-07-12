import { INCREMENT } from '../actions/constants'

const initialState = {
  value: 0,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
    return {
      ...state,
      value: state.value + action.payload.valueToIncrement
    }

    default: 
    return state
  }
}

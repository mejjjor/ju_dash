import {INCREMENT} from './constants'

export const increment = ({valueToIncrement}) => {
  return {
    type: INCREMENT,
    payload: {
      valueToIncrement,
    }
  }
}

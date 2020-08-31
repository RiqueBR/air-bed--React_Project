// Import all actions
import * as actions from '../actions/locationsActions'

export const initialState = {
  locations: [],
  loading: false,
  hasErrors: false,
}

export default function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_LOCATIONS:
      return {...state, loading: true}
    case actions.GET_LOCATIONS_SUCCESS:
      return {locations: action.payload, loading: false, hasErrors: false}
    case actions.GET_LOCATIONS_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
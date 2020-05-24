// Import all actions
import * as actions from '../actions/propertiesActions'

export const initialState = {
  properties: [],
  loading: false,
  hasErrors: false,
}

export default function propertiesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PROPERTIES:
      return {...state, loading: true}
    case actions.GET_PROPERTIES_SUCCESS:
      return {properties: action.payload, loading: false, hasErrors: false}
    case actions.GET_PROPERTIES_FAILURE:
      return {...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
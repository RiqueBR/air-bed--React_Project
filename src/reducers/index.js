import { combineReducers } from 'redux'

import propertiesReducer from './propertiesReducer'
import locationsReducer from './locationsReducer'

const rootReducer = combineReducers({
  properties: propertiesReducer,
  locations: locationsReducer
})

export default rootReducer
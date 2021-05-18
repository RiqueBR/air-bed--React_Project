// Create Redux action types
export const GET_PROPERTIES = 'GET PROPERTIES'
export const GET_PROPERTIES_SUCCESS = 'GET_PROPERTIES_SUCCESS'
export const GET_PROPERTIES_FAILURE = 'GET_PROPERTIES_FAILURE'

// Create Redux action creators that return an action
export const getProperties = () => ({
  type: GET_PROPERTIES,
})

export const getPropertiesSuccess = properties => ({
  type: GET_PROPERTIES_SUCCESS,
  payload: properties,
})

export const getPropertiesFailure = () => ({
  type: GET_PROPERTIES_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchProperties(value) {
  return async dispatch => {
    dispatch(getProperties())
    try {
      const response = await fetch(`/api/property/?location=${value}`)
      const data = await response.json()

      dispatch(getPropertiesSuccess(data.results))
    } catch (error) {
      dispatch(getPropertiesFailure())
    }
  }
}

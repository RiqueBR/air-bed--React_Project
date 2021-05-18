// Create Redux action types
export const GET_LOCATIONS = 'GET LOCATIONS'
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS'
export const GET_LOCATIONS_FAILURE = 'GET_LOCATIONS_FAILURE'

// Create Redux action creators that return an action
export const getLocations = () => ({
  type: GET_LOCATIONS,
})

export const getLocationsSuccess = locations => ({
  type: GET_LOCATIONS_SUCCESS,
  payload: locations,
})

export const getLocationsFailure = () => ({
  type: GET_LOCATIONS_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchLocations() {
  return async dispatch => {
    dispatch(getLocations())

    try {
      const response = await fetch('/api/location/')
      const data = await response.json()

      dispatch(getLocationsSuccess(data))
    } catch (error) {
      dispatch(getLocationsFailure())
    }
  }
}

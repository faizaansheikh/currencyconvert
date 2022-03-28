import * as ActionTypes from '../constant/index'

const inintialState = {
  currencyCounter: []
}

export const CurrencyReducer = (state = inintialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CURRENCY:
      return {
        ...state,
        currencyCounter: action.payload
      }
    default: return state
  }
}

import axios from "axios"

import * as ActionTypes from '../constant/index'

export const CurrencyConverter = () => {
    return (dispatch) => {
        axios.get(`https://api.fastforex.io/fetch-all?api_key=185862e2bc-894a021708-r9cvm3`)
            .then((res) => {
                dispatch({
                    type: ActionTypes.GET_CURRENCY,
                    payload: res.data.results
                })
            }).catch((error) => {
                dispatch({
                    type: ActionTypes.GET_CURRENCY_ERROR,
                    payload: error.message
                })
            })
    }
}
import axios from 'axios'
import * as types from './actionTypes'
import {compileRequest} from '../components/utils/commonutils'
import cookie from 'react-cookie'

function dispatchRequest(actionType, payload) {
    return {type: actionType, formSchema: payload}
}

let formActions = {
    loadInitialJSONSchema: function() {
        return function(dispatch) {
            //can dispatch empty data to show loading icon in UI
            const paramerters = {
                url: '/startInterview',
                method: 'get',
                responseType: 'json',
                data: {},
                headers: {
                    'token': cookie.load('userToken')
                }
            }
            return axios(paramerters).then(function(response) {
                dispatch(dispatchRequest(types.LOAD_INIT_JSON_SCHEMA, response.data));
            }).catch(function(response) {
                console.error("Error while loading init Schema : " + response);
            })
        }
    },
    reloadJSONSchema: function(currentState, pageProps) {
        return function(dispatch) {
            //can dispatch empty data to show loading icon in UI
            dispatch(dispatchRequest(types.LOAD_NEW_JSON_SCHEMA, []));
            let dataToSave = compileRequest(currentState, pageProps)
            console.log("Request to Sever : ", dataToSave)
            return axios({
                url: '/saveUserInputs',
                headers: {
                    'token': cookie.load('userToken')
                },
                data: dataToSave,
                timeout: 20000,
                method: 'POST',
                responseType: 'json'
            }).then(function(response) {
                console.log("Response from Sever : ", response.data)
                dispatch(dispatchRequest(types.LOAD_NEW_JSON_SCHEMA, response.data));
            }).catch(function(response) {
                console.error("Error while Re-loading new Schema : " + response.data);
            })
        }
    }
}

export default formActions

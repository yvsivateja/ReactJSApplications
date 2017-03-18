import $ from 'jquery'
import axios from 'axios'

function getInitData(url) {
    axios({url: url, timeout: 20000, method: 'get', responseType: 'json'})
    .then(function(response) {
        console.log(response.data.results)//--Data Displayed
        return response.data.results
    })
    .catch(function(response) {
        console.error(response.data);
    })
}

let formActions = {
    loadInitJSONSchema: function(formSchema) {
        let dataLoaded = getInitData('/startInterview')
        console.log(dataLoaded);//--Data Displayed as undefined
        return {type: 'LOAD_INIT_JSON_SCHEMA', formSchema: dataLoaded}
    }

}

export default formActions

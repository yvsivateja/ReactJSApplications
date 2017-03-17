import $ from 'jquery'

let formActions = {
    loadCustomers: function(formSchema) {
        return {type: 'LOAD_CUSTOMERS', formSchema: formSchema}
    }
}

export default formActions

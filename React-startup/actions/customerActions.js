import $ from 'jquery'

let customerActions = {
    loadCustomers: function(customers) {
        return {type: 'LOAD_CUSTOMERS', results: customers}
    }
}

export default customerActions

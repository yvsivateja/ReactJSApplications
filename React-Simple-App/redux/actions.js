import $ from 'jquery'

let actions = {
    loadCustomers: function(customers) {
        return {type: 'LOAD_CUSTOMERS', results: customers}
    },
    addCustomer: function(customer) {
        return {type: 'ADD_CUSTOMER', customer: customer}
    },
    deleteCustomer: function(id) {
        return {type: 'DELETE_CUSTOMER', id: id}
    }
}

export default actions

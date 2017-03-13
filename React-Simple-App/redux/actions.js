import $ from 'jquery'

let actions = {
    createCustomers: function(customers) {
        return {type: 'CREATE_CUSTOMERS', customers: customers}
    },
    addCustomer: function(customer) {
        $.ajax({
            url: '/savecustomer',
            type: 'post',
            data : customer,
            'Content-Type':'application/json'
        });
        return {type: 'ADD_CUSTOMER', customer: customer}
    },
    deleteCustomer: function(id) {
        $.ajax({
            url: '/deletecustomer/' + id,
            type: 'post'
        });
        return {type: 'DELETE_CUSTOMER', id: id}
    }
}

export default actions

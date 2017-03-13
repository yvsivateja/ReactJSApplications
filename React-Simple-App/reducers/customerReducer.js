let customerReducer = function(customers = [], action) {
    switch (action.type) {
        // case 'CREATE_CUSTOMERS':
        //     return action.customers.customers
        case 'ADD_CUSTOMER':
        return [{
            name:action.name,
            address:action.address,
            id:0
          }, ...customers]
        case 'DELETE_CUSTOMER':
            {
                return customers.filter((customer) => {
                    return customer.id !== action.id
                })
            }
        default:
            return customers;
    }
}

export default customerReducer

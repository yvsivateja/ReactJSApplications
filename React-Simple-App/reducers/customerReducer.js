let customerReducer = function(customers = [], action) {
    switch (action.type) {
        case 'LOAD_CUSTOMERS':
            {
              return Object.assign(...customers, action.results.customers
                    ? action.results.customers
                    : []);
            }
        case 'ADD_CUSTOMER':
            {
                return [
                    {
                        name: action.customer.name,
                        address: action.customer.address,
                        id: action.customer.id
                    },
                    ...customers
                ]
            }
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

let customerReducer = function(customers = [], action) {
    switch (action.type) {
        case 'LOAD_CUSTOMERS':
            return Object.assign(...customers, action.results.customers
                ? action.results.customers
                : []);
        default:
            return customers;
    }
}

export default customerReducer

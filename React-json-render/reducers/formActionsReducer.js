let formActionsReducer = function(formSchema = [], action) {
    switch (action.type) {
        case 'LOAD_CUSTOMERS':
            return Object.assign(...customers, action.results.customers
                ? action.results.customers
                : []);
        default:
            return formSchema;
    }
}

export default formActionsReducer

let formActionsReducer = function(formSchema = [], action) {
    switch (action.type) {
        case 'LOAD_INIT_JSON_SCHEMA':
            return Object.assign(...formSchema, action.formSchema);
        case 'LOAD_NEW_JSON_SCHEMA':
            return Object.assign(...formSchema, action.formSchema);
        default:
            return formSchema;
    }
}

export default formActionsReducer

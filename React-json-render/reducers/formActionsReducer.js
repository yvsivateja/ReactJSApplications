let formActionsReducer = function(formSchema = [], action) {
    switch (action.type) {
        case 'LOAD_INIT_JSON_SCHEMA':
        {
            console.log(action.formSchema);
            return Object.assign(...formSchema, action.formSchema);
        }
        default:
            return formSchema;
    }
}

export default formActionsReducer

let formActions = {
    loadInitJSONSchema: function(formSchema) {
        return {type: 'LOAD_INIT_JSON_SCHEMA', formSchema: formSchema}
    },
    reloadJSONSchema:function(formSchema){
      return {type: 'LOAD_NEW_JSON_SCHEMA', formSchema: formSchema}
    }
}

export default formActions

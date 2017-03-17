var dbConnection = require('./dbConnection');

var customerModel = {
    convertRowsToCustomersObject: function(rows) {
        var customers = [];
        rows.forEach(function(index) {
            var customer = {
                id: rows[0].id,
                name: rows[0].name,
                address: rows[0].address
            }
            customers.push(customer)
        });
        return {customers: rows};
    },
    getCustomers: function(callback) {
        var getCustomerSqlString = 'SELECT * from customer_info'
        dbConnection.query(getCustomerSqlString, function(error, results, fields) {
            if (error) {
                dbConnection.destroy();
                console.log("error: ", error);
                return (callback({error: error}));
            } else if (results.length === 0) {
                return (callback({error: "User not found."}));
            } else {
                return (callback(customerModel.convertRowsToCustomersObject(results)));
            }
        });
    },
    getNewRowID: function(results) {
        return {id: results.insertId};
    },
    saveCustomer: function(customer,callback) {
        console.log(customer);
        var saveCustomerSqlString = 'INSERT INTO customer_info SET ?'
        var jsonString = JSON.stringify(customer)
        var query = dbConnection.query(saveCustomerSqlString, customer, function(error, results) {
            if (error) {
                dbConnection.destroy();
                console.log("error: ", error);
                return (callback({error: error}));
            } else {
                return (callback(customerModel.getNewRowID(results)));
            }
        });
    },
    deleteCustomer: function(id) {
        var deleteCustomerSqlString = 'DELETE FROM customer_info WHERE id =?'
        dbConnection.query(deleteCustomerSqlString, id, function(error, results) {
            if (error) {
                dbConnection.destroy();
                console.log("error: ", error);
            } else {
                console.log("Success: Customer Deleted Successfully" + results);
            }
        });
    }
}

module.exports = customerModel

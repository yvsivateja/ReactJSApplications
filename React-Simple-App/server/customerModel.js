var mysqlConnection = require('./mysqlConnection');

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
        mysqlConnection.query(getCustomerSqlString, function(error, results, fields) {
            if (error) {
                mysqlConnection.destroy();
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
        var query = mysqlConnection.query(saveCustomerSqlString, customer, function(error, results) {
            if (error) {
                mysqlConnection.destroy();
                console.log("error: ", error);
                return (callback({error: error}));
            } else {
                return (callback(customerModel.getNewRowID(results)));
            }
        });
    },
    deleteCustomer: function(id) {
        var deleteCustomerSqlString = 'DELETE FROM customer_info WHERE id =?'
        mysqlConnection.query(deleteCustomerSqlString, id, function(error, results) {
            if (error) {
                mysqlConnection.destroy();
                console.log("error: ", error);
            } else {
                console.log("Success: Customer Deleted Successfully" + results);
            }
        });
    }
}

module.exports = customerModel

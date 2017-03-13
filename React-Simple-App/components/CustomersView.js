import React, {Component} from 'react'
import CustomerList from './CustomerList'
import CustomerAdd from './CustomerAdd'
import $ from 'jquery'

class CustomersView extends Component {
    constructor(props, context) {
        super(props, context);
        this.loadCustomersFromServer()
				this.state = {customers: []};
    }
    loadCustomersFromServer() {
        $.ajax({
            url: '/customers',
            dataType: 'json',
            success: (data) => {
                this.setState(data);
                //this.props.actions.createCustomers(data);
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }
    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <CustomerList customers={this.state.customers} actions={this.props.actions}/>
                    </div>
                    <div className="row">
                        <CustomerAdd actions={this.props.actions}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomersView

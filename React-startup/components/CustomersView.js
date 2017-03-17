import React, {Component} from 'react'
import CustomerList from './CustomerList'
import $ from 'jquery'

class CustomersView extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            showList: true
        }
    }
    componentDidMount() {
        $.ajax({
            url: '/customers',
            dataType: 'json',
            success: (data) => {
                this.props.actions.loadCustomers(data);
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
                    <div className="row" ref="myRef">
                        <div className="col-lg-12">
                            <CustomerList customers={this.props.customers} actions={this.props.actions}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomersView

import React, {Component} from 'react'
import CustomerList from './CustomerList'
import CustomerAdd from './CustomerAdd'
import $ from 'jquery'

class CustomersView extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            showList: true
        }
    }
    handleAddClick() {
        console.log("state changed");
        this.setState({
            showList: !this.state.showList
        })
    }
    onCompleteAdd(newState) {
        this.setState({showList: newState});
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
                        {this.state.showList
                            ? (
                                <div className="col-lg-12">
                                    <h1>Registered Clients &nbsp;
                                        <button type="button" className="btn btn-success" onClick={this.handleAddClick.bind(this)}>Add Customer</button>
                                    </h1>
                                    <CustomerList customers={this.props.customers} actions={this.props.actions}/>
                                </div>
                            )
                            : <CustomerAdd actions={this.props.actions} initialChecked={this.state.showList} handleComponentChange={(newState) => this.onCompleteAdd(newState)}/>
}
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomersView

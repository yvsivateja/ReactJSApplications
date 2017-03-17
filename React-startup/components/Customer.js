import React, {Component} from 'react'
import $ from 'jquery'

class Customer extends Component {
    handleEditClick(event) {
        //handle Edit call actions
    }
    handleDeleteCustomer(event) {
        //handle Delete call actions
    }
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.customer.name}</td>
                <td>{this.props.customer.address}</td>
                <td>
                    <button type="button" onClick={this.handleEditClick.bind(this)} className="btn btn-info">Edit</button>
                    &nbsp;
                    <button type="button" onClick={this.handleDeleteCustomer.bind(this)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default Customer

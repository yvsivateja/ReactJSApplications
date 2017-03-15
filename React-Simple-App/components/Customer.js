import React, {Component} from 'react'
import $ from 'jquery'

class Customer extends Component {
    handleEditClick(event) {
        //this.props.actions.completeTodo(this.props.todo.id)
    }
    handleDeleteCustomer(event) {
        $.ajax({
            url: '/deletecustomer/' + this.props.customer.id,
            type: 'post',
            success: (data) => {
                this.props.actions.deleteCustomer(this.props.customer.id)
            }
        });

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

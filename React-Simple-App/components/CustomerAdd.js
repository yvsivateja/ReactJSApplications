import React, {Component} from 'react'
import Customer from './Customer'
import $ from 'jquery'

class CustomerAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showList: this.props.initialChecked
        };
    }
    handleAddClick(event) {
        event.preventDefault();
        const input = {
            name: this.state.name,
            address: this.state.address
        }
        $.ajax({
            url: '/savecustomer',
            type: 'post',
            data: input,
            success: (data) => {
                var newId = data.id;
                var customer = {
                    id: newId,
                    name: this.state.name,
                    address: this.state.address
                }
                this.props.actions.addCustomer(customer)
                const newState = !this.state.checked;
                this.setState({showList: newState}); // we update our state
                this.props.handleComponentChange(newState);
            },
            'Content-Type': 'application/json'
        });

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="col-lg-12">
                <h1>Add Client</h1>
                <div className="form">
                    <form onSubmit={this.handleAddClick.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="Name">Name:</label>
                            <input type="text" className="form-control" name="name" id="Name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Address">Address:</label>
                            <input type="text" className="form-control" name="address" id="Address" value={this.state.address} onChange={this.handleChange.bind(this)}/>
                        </div>
                        <button type="Submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CustomerAdd

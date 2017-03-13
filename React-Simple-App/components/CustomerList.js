import React, {Component} from 'react'
import Customer from './Customer'

class CustomerList extends Component {
		render() {
        return (
            <div className="col-lg-12">
                <h1>Registered Clients</h1>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
														 	this.props.customers.map((customer, index) => {
																 return <Customer key={index+1} index={index+1} customer={customer} actions={this.props.actions}/>
                            	})
														}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CustomerList

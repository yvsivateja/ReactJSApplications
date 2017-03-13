import React, {Component} from 'react'
import Customer from './Customer'

class CustomerAdd extends Component {
    handleAddClick(event) {
        this.props.actions.addCustomer(this.state)
    }
    handleChange(event){
    	this.setState({
    		[event.target.name] : event.target.value
    	})
   }
    render() {
        return (
            <div className="col-lg-12">
                <h1>Add Client</h1>
                <div className="form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="Name">Name:</label>
                            <input type="text" className="form-control" name="name" id="Name" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Address">Address:</label>
                            <input type="text" className="form-control" name="address" id="Address" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <button type="button" className="btn btn-default" onClick={this.handleAddClick.bind(this)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CustomerAdd

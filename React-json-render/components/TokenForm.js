import React, {Component} from 'react'
import cookie from 'react-cookie'

class TokenForm extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            sessionToken: '',
            error: '',
            showList: this.props.initialChecked
        }
    }
    onChange(event) {
        this.setState({sessionToken: event.target.value, error: ''})
    }
    formSubmitHandler(event) {
        event.preventDefault();
        if (this.state.sessionToken === "") {
            this.setState({error: "Please Enter a Value to Start Interview"})
        } else {
            cookie.save('userToken', this.state.sessionToken, {
                path: '/',
                maxAge: 86400
            });
            const newState = true;
            this.setState({showForm: newState}); // we update our state
            this.props.handleComponentChange(newState);
        }

    }
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.formSubmitHandler.bind(this)}>
                <fieldset>
                    <legend>Token Register Form</legend>
                    <div className='form-group'>
                        <label className="col-md-4 control-label" htmlFor="tokenid">
                            Enter Token</label>
                        <div className="col-md-4">
                            <input type="text" name="sessionToken" id="tokenid" placeholder="Please paste your token here" className="form-control input-md" onChange={this.onChange.bind(this)}/>
                            <small className="error-message">
                                {this.state.error}
                            </small>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <button type='submit' className="btn btn-primary btn-space">
                                Start Interview
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default TokenForm

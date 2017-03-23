import React, {Component} from 'react'

class SelectField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            [this.props.screenField.name]: this.props.screenField.value
        };
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.props.handleStateChange(nextState);
        return true;
    }
    render() {
        return (
            <div className='form-group'>
                <label className="col-md-4 control-label" htmlFor={this.props.screenField.name}>
                    {this.props.screenField.label}</label>
                <div className="col-md-4">
                    <select
                      name={this.props.screenField.name}
                      id={this.props.screenField.name}
                      value={this.state[this.props.screenField.name]}
                      placeholder={this.props.screenField.helpText}
                      required={this.props.screenField.isRequired}
                      onChange={this.onChange.bind(this)}
                      className='form-control'>
                      {this.props.screenField.choices.map((choiceField, index) => {
                          return (
                              <option key={index}
                                    name={this.props.screenField.name}
                                    select={this.state[this.props.screenField.name] === choiceField.name}
                                    id={choiceField.name}
                                    onChange={this.onChange.bind(this)}
                                    value={choiceField.name}>
                                  {choiceField.label}
                              </option>
                          )
                      })}
                    </select>
                    {this.props.screenField.errorMessages
                        ? this.props.screenField.errorMessages.map((errorMessage, index) => {
                            return <small key={index} className="error-message">
                                {errorMessage.error_msg}
                            </small>
                        })
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default SelectField

import React, {Component} from 'react'

class InputField extends Component {
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
    render() {
        return (this.props.screenField.fieldType === 'INPUT'
            ? <div className='form-group'>
                    <label className="col-md-4 control-label" htmlFor="AC">{this.props.screenField.label}</label>
                    <div className="col-md-4">
                        <input type={this.props.screenField.dataType === 'BOOLEAN'
                            ? 'checkbox'
                            : this.props.screenField.dataType}
                            name={this.props.screenField.name}
                            id={this.props.screenField.name}
                            placeholder={this.props.screenField.helpText}
                            required={this.props.screenField.isRequired}
                            value={this.state[this.props.screenField.name]}
                            className={this.props.screenField.dataType !== 'BOOLEAN'
                                ? 'form-control input-md'
                                : this.props.screenField.dataType}
                            onChange={this.onChange.bind(this)}/>
                    </div>
                </div>
            : null)
    }
}

export default InputField

import React, {Component} from 'react'

class InputField extends Component {
    constructor(props) {
        super(props)
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
          this.props.screenField.fieldType === 'INPUT'
            ? <div className='form-group'>
                    <label htmlFor={this.props.screenField.name}>{this.props.screenField.label}:</label>
                    <input type={this.props.screenField.dataType === 'BOOLEAN'
                        ? 'checkbox'
                        : this.props.screenField.dataType}
                        name={this.props.screenField.name}
                        id={this.props.screenField.name}
                        placeholder={this.props.screenField.helpText}
                        required={this.props.screenField.isRequired}
                        value={this.props.screenField.value} className='form-control'
                        onChange={this.onChange.bind(this)}/>
                </div>
            : null
          )
    }
}

export default InputField

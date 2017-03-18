import React, {Component} from 'react'

class RadioField extends Component {
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
        return (this.props.screenField.fieldType === 'RADIO_BUTTONS'
            ? <div className='form-group'>
                    <label className='col-md-4 control-label'>
                        <span>{this.props.screenField.label}</span>
                    </label>
                    <div className="col-md-4">
                        {this.props.screenField.choices.map((choiceField, index) => {
                            return (
                                <label key={index} className='radio-inline'
                                  htmlFor={choiceField.name}>
                                    <input type="radio" name={choiceField.name}
                                      checked={choiceField.isSelected}
                                      id={choiceField.name}
                                      onChange={this.onChange.bind(this)}
                                      />
                                    {choiceField.label}
                                </label>
                            )
                        })}
                    </div>
                </div>
            : null)
    }
}

export default RadioField

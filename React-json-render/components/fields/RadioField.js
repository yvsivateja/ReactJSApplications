import React, {Component} from 'react'

class RadioField extends Component {
    render() {
        return (this.props.screenField.fieldType === 'RADIO_BUTTONS'
            ? <div className='form-group'>
                    <label>{this.props.screenField.label}</label>
                    {
                      this.props.screenField.choices.map(function(choiceField) {
                        <label className = "radio-inline" > <input type="radio" name={choiceField.name}/>
                            {choiceField.label}
                        </label>
                      })
                    }
                </div>
            : null)
    }
}

export default RadioField

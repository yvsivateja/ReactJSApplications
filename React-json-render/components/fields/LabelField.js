import React, {Component} from 'react'

class LabelField extends Component {
    render() {
        return (
          this.props.screenField.fieldType === 'DISPLAY_TEXT'
            ? <div className='form-group'>
                    <label>{this.props.screenField.label}</label>
                </div>
            : null)
    }
}

export default LabelField

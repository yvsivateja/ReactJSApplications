import React, {Component} from 'react'

class LabelField extends Component {
    render() {
        return (
          this.props.screenField.fieldType === 'DISPLAY_TEXT'
            ? <div className='form-group'>
                    <label className='col-md-8 control-label'>{this.props.screenField.label}</label>
                </div>
            : null)
    }
}

export default LabelField

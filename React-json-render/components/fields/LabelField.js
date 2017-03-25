import React, {Component} from 'react'
import {containsHTMLTags} from '../utils/commonutils'

class LabelField extends Component {

    render() {
        let myLabel = {}
        if (containsHTMLTags(this.props.screenField.label)) {
            myLabel = (<span dangerouslySetInnerHTML={{
                __html: this.props.screenField.label
            }}/>)
        } else {
            myLabel = (
                <label className='col-md-8 control-label'>{this.props.screenField.label}</label>
            )
        }
        return (
            <div className='form-group'>
                {myLabel}
            </div>
        )
    }
}

export default LabelField

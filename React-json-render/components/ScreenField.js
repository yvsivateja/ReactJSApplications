import React, {Component} from 'react'
import InputField from './fields/InputField'
import LabelField from './fields/LabelField'
import RadioField from './fields/RadioField'

class ScreenField extends Component {
    render() {
        return (
            <span>
                <InputField screenField={this.props.screenField}/>
                <LabelField screenField={this.props.screenField}/>
                <RadioField screenField={this.props.screenField}/>
            </span>
        )
    }
}

export default ScreenField

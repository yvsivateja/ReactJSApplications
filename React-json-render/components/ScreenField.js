import React, {Component} from 'react'
import InputField from './fields/InputField'
import LabelField from './fields/LabelField'
import RadioField from './fields/RadioField'

class ScreenField extends Component {
    bindNewState(newState) {
        //this.setState([...this.state,newState]) --Not Working
    }
    render() {
        return (
            <span>
                <InputField screenField={this.props.screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                <LabelField screenField={this.props.screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                <RadioField screenField={this.props.screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
            </span>
        )
    }
}

export default ScreenField

import React, {Component} from 'react'
import InputField from './fields/InputField'
import LabelField from './fields/LabelField'
import RadioField from './fields/RadioField'

class ScreenField extends Component {
    bindNewState(newState) {
        const petList = Object.entries(newState).map(([key, value]) => {
          console.log(key+':'+value.toString());
        })
        this.setState([...this.state,newState])
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

import React, {Component} from 'react'
import InputField from './fields/InputField'
import LabelField from './fields/LabelField'
import RadioField from './fields/RadioField'
import MyButton from './fields/MyButton'

class MyForm extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentDidMount() {
        //
    }
    bindNewState(newState) {
        this.setState(newState)
    }
    formSubmitHandler(event) {
        event.preventDefault();
        console.log("action called")
        console.log(this.state)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.formSubmitHandler.bind(this)}>
                <fieldset>
                    <legend>{this.props.myform.flowLabel}</legend>
                    {this.props.myform.screenFields.map((screenField, index) => {
                        return (
                            <span key={index} >
                                <InputField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                <LabelField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                <RadioField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                            </span>
                        )
                    })}
                    <MyButton myform={this.props.myform}/>
                </fieldset>
            </form>
        )
    }
}

export default MyForm

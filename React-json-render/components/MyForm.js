import React, {Component} from 'react'
import InputField from './fields/InputField'
import LabelField from './fields/LabelField'
import RadioField from './fields/RadioField'
import HiddenField from './fields/HiddenField'
import SelectField from './fields/SelectField'
import MyButton from './fields/MyButton'

class MyForm extends Component {
    constructor(props, context) {
        super(props, context)
    }
    bindNewState(newState) {
        this.setState(newState)
    }

    formSubmitHandler(event) {
        event.preventDefault();
        this.props.actions.reloadJSONSchema(this.state, this.props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.formSubmitHandler.bind(this)}>
                <fieldset>
                    <legend>{this.props.myform.flowLabel}</legend>
                    {this.props.myform.screenFields
                        ? this.props.myform.screenFields.map((screenField, index) => {
                            return (
                                <span key={index}>
                                    {screenField.fieldType === 'INPUT' && screenField.dataType !== 'HIDDEN'
                                        ? <InputField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                        : null}
                                    {screenField.fieldType === 'INPUT' && screenField.dataType === 'HIDDEN'
                                        ? <HiddenField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                        : null}
                                    {screenField.fieldType === 'DISPLAY_TEXT'
                                        ? <LabelField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                        : null}
                                    {screenField.fieldType === 'RADIO_BUTTONS'
                                        ? <RadioField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                        : null}
                                    {screenField.fieldType === 'DROPDOWN'
                                        ? <SelectField screenField={screenField} handleStateChange={(newState) => this.bindNewState(newState)}/>
                                        : null}
                                </span>
                            )
                        })
                        : null}
                    {this.props.myform.availableActions
                        ? <MyButton myform={this.props.myform} handleStateChange={(newState) => this.bindNewState(newState)}/>
                        : null}
                    {this.props.myform.interviewStatus === "FINISHED"
                        ? <div className="form-group">
                                <div className="col-md-4"></div>
                                <div className="col-md-8">
                                    <a href='/home' className="btn btn-primary btn-space">
                                        Home
                                    </a>
                                </div>
                            </div>
                        : ''}
                </fieldset>
            </form>
        )
    }
}

export default MyForm

import React, {Component} from 'react'
import ScreenField from './ScreenField'
import MyButton from './fields/MyButton'

class MyForm extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentDidMount() {
        //
    }
    formSubmitHandler(event) {
        event.preventDefault();
        console.log("action called")
        console.log(this.state)
    }
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.formSubmitHandler.bind(this)}>
                <fieldset>
                    <legend>{this.props.myform.flowLabel}</legend>
                    {this.props.myform.screenFields.map((screenField, index) => {
                        return <ScreenField key={index + 1} index={index + 1} screenField={screenField} actions={this.props.actions}/>
                    })}
                    <MyButton myform={this.props.myform}/>
                </fieldset>
            </form>
        )
    }
}

export default MyForm

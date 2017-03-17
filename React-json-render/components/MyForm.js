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
            <div className="row">
                <div className="col-lg-12">
                    <h1>
                        {this.props.myform.flowLabel}
                    </h1>
                    <form onSubmit={this.formSubmitHandler.bind(this)}>
                        {this.props.myform.screenFields.map((screenField, index) => {
                            return <ScreenField key={index + 1} index={index + 1} screenField={screenField} actions={this.props.actions}/>
                        })}
                        <MyButton myform={this.props.myform}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default MyForm

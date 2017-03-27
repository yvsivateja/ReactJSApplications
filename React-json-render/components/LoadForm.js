import React, {Component} from 'react'
import MyForm from './MyForm'

class LoadForm extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentDidMount() {
        this.props.actions.loadInitialJSONSchema();
    }
    render() {
        return (this.props.myform && this.props.myform.errorCode
            ? <p>Error while page render with message at server :{this.props.myform.message}</p>
            : (this.props.myform
                ? <MyForm myform={this.props.myform} actions={this.props.actions}/>
                : <p>
                    Please wait while the page is loaded
                </p>))
    }
}

export default LoadForm

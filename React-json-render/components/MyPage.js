import React, {Component} from 'react'
import LoadForm from './LoadForm'
import TokenForm from './TokenForm'

class MyPage extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            showForm: false
        }
    }

    changeShowFormState(newState) {
        this.setState({showForm: newState});
    }
    render() {
        let renderedComponent;
        if (this.state.showForm) {
            renderedComponent = <LoadForm myform={this.props.formSchema[0]} actions={this.props.actions}/>;
        } else {
            renderedComponent = <TokenForm actions={this.props.actions} handleComponentChange={(newState) => this.changeShowFormState(newState)}/>
        }
        return (
            <div>
                {renderedComponent}
            </div>
        )
    }
}

export default MyPage

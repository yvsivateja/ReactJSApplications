import React, {Component} from 'react'
import CustomersView from './CustomersView'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions/customerActions'
import $ from 'jquery'

class App extends Component {
    render() {
        return (
            <span>
                <CustomersView customers={this.props.customers} actions={this.props.actions}/>
            </span>
        )
    }
}

function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

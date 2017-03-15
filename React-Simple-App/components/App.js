import React, {Component} from 'react'
import SideMenu from './SideMenu'
import CustomersView from './CustomersView'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import $ from 'jquery'

class App extends Component {
    render() {
        return (
            <span>
                <SideMenu headerText="React JS Application"/>
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

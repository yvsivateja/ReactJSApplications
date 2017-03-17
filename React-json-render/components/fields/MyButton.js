import React, {Component} from 'react'

class MyButton extends Component {
    render() {
        return (
          this.props.myform.availableActions
            ? <button type='submit'>{this.props.myform.availableActions[0].label}</button>
            : ''
        )
    }
}

export default MyButton

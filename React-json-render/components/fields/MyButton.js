import React, {Component} from 'react'

class MyButton extends Component {
    render() {
        return (this.props.myform.availableActions.length > 0
            ? (
                <div className="form-group">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        {this.props.myform.availableActions.map((currentAction,index) => {
                            return (
                                <button key={index}
                                  type='submit' id={currentAction.label} className="btn btn-primary btn-space">
                                    {currentAction.label}
                                </button>
                            )
                          })
                        }
                    </div>
                </div>
            )
            : null)
    }
}

export default MyButton

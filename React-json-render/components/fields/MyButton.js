import React, {Component} from 'react'

class MyButton extends Component {
    constructor(props) {
        super(props)
        this.state = {'actionClicked': ''};
    }
    onClick(event) {
        this.setState({'actionClicked': event.target.name})
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.props.handleStateChange(nextState);
        return true;
    }
    render() {
        return (this.props.myform.availableActions.length > 0
            ? (
                <div className="form-group">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        {this.props.myform.availableActions.map((currentAction, index) => {
                            return (
                                <button key={index} type='submit' id={currentAction.id} className="btn btn-primary btn-space" name={currentAction.id} onClick={this.onClick.bind(this)}>
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

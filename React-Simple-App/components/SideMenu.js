import React,{Component} from 'react'

class TextDisplay extends Component{

	render(){
		return (
      <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        {this.props.headerText}
                    </a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
            </ul>
        </div>
		)
	}
}

export default TextDisplay

import React,{Component} from "react";
import '../App.css';


export default class MessageItem extends Component{
    constructor(props){
        super(props);
    }

    renderChecxBox = () =>{
        const {mull} = this.props;
        return mull ? (
            <div className="checkBox">
                <input type="checkbox"  /> 
            </div>
        ) : null
    }
    
    
    render(){
        const {item,mull} = this.props;
        return(
            <li className="eve_content"  >
                {this.renderChecxBox()}
                <img src={item.img} />
                <div className="textContent">
                    <p className="chatName">{item.title}</p>
                    <p className="chatCont">{item.description}</p>
                </div>
                <div className="timeRight">
                    <p className="chatTime">{item.time}</p>
                    <button className="button" onClick={this.props.show1}>更多</button>
                </div>
            </li>
        )
    }
}
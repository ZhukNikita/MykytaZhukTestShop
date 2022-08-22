import product from "../CssModules/ProductPage.module.css"

import React  from 'react';

class ColorButtons extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
                <button className={this.props.activeColor === this.props.color ? this.props.style.activeColor: this.props.style.color} style={{background: this.props.color}} onClick={()=>this.props.setActiveColors(this.props.color)}></button>
        )}
}
export default ColorButtons
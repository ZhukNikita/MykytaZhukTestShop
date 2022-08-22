import product from "../CssModules/ProductPage.module.css"

import React  from 'react';

class SizeButtons extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){

        return(
            <button className={this.props.activeSize === this.props.name ? this.props.style.activeSize: this.props.style.size} onClick={()=>this.props.setActiveSizes(this.props.name)}>{this.props.name}</button>
        )}
}
export default SizeButtons
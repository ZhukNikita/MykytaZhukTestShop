import React  from 'react';

class AttributesButton extends React.Component{
    render(){

        return(
            <button className={this.props.activeAttributes === this.props.name ? this.props.style.activeAttribute: this.props.style.attribute}
                    onClick={()=>this.props.setActiveAttributes(this.props.name)}>{this.props.name}
            </button>
        )}
}
export default AttributesButton
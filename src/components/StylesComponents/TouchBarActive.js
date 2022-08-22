import React  from 'react';

class TouchBarActive extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){

        return(
            <button className={this.props.activeButton === this.props.name ? this.props.style.activeAttribute: this.props.style.attribute}
                    onClick={()=>this.props.setActiveButton(this.props.name)}>{this.props.name}
            </button>
        )}
}
export default TouchBarActive
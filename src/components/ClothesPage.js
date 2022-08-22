import React from "react";
import '../App.css';
import NavBar from "./NavBar";
import ProductList from "./Products/ProductList";

class Tech extends React.Component{
    constructor(props) {
        super(props);
        this.idCount = this.props.idCount;
    }

    render(){
        const categories = [ '/WOMEN' , '/MAN' , "/KIDS"]
        return(
            <div>
                <NavBar
                    categories={categories}
                    removeProduct={this.props.removeProduct}
                    addProduct={this.props.addProduct}
                    products={this.props.products}
                    selectorChange={this.props.selectorChange}
                    selector={this.props.selector}
                    CheckOut={this.props.CheckOut}
                />
                <ProductList selector={this.props.selector}  categories={'Clothes'} idCount={this.idCount}/>
            </div>
        )
    }
}
export default Tech
import React from "react";
import '../App.css';
import NavBar from "./NavBar";
import ProductList from "./Products/ProductList";

class Tech extends React.Component{
    constructor(props) {
        super(props);
        this.openCart = this.props.openCart;
        this.idCount = this.props.idCount;
    }

    render(){
        const categories = [ '/TECH' , '/CLOTHES']
        return(
            <div>
                <NavBar
                    categories={categories}
                    openCart = {this.openCart}
                    removeProduct={this.props.removeProduct}
                    addProduct={this.props.addProduct}
                    message = {this.props.message}
                    products={this.props.products}
                    selectorChange={this.props.selectorChange}
                    selector={this.props.selector}
                    CheckOut={this.props.CheckOut}
                />
                <ProductList selector={this.props.selector}  categories={'Tech'} idCount={this.idCount}/>
            </div>
        )
    }
}
export default Tech
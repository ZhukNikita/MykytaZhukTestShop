import React from "react";
import NavBar from "../NavBar";
import ProductList from "../Products/ProductList";

class ManPage extends React.Component{
    render() {
        const categories = [ '/WOMEN' , '/MAN' , "/KIDS"]
        return (
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
                <ProductList selector={this.props.selector}  categories={'Man'} idCount={this.props.idCount}/>
            </div>
        );
    }
}
export default ManPage;
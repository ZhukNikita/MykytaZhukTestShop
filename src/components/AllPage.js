import React from "react";
import '../App.css';
import NavBar from "./NavBar";
import ProductList from "./Products/ProductList";

class AllPage extends React.Component{
    constructor(props) {
        super(props);
        this.idCount = this.props.idCount;
        this.setCategories = this.props.setCategories;
    }
    render(){
        const categories = [ '/TECH' , '/CLOTHES']
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
                <ProductList
                    selector={this.props.selector}
                    categories={'All'}
                    idCount={this.idCount}
                    setCategories={this.props.setCategories}
                    categoriesProduct={this.props.categories}/>
            </div>
        )
    }
}
export default AllPage
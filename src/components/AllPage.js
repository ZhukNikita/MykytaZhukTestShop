import React from "react";
import '../App.css';
import NavBar from "./NavBar";
import ProductList from "./Products/ProductList";

class AllPage extends React.Component{
    render(){
        const {selector , products , CheckOut , selectorChange , Increase , Decrease , idCount , setCategories} = this.props
        const categories = [ '/TECH' , '/CLOTHES']
        return(
            <div>
                <NavBar
                    categories={categories}
                    products={products}
                    selectorChange={selectorChange}
                    selector={selector}
                    CheckOut={CheckOut}
                    Increase ={Increase}
                    Decrease ={Decrease}
                />
                <ProductList
                    selector={selector}
                    categories={'All'}
                    idCount={idCount}
                    setCategories={setCategories}
                />
            </div>
        )
    }
}
export default AllPage
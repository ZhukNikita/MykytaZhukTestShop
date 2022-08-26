import React from "react";
import '../App.css';
import NavBar from "./NavBar";
import ProductList from "./Products/ProductList";

class Tech extends React.Component{
    render(){
        const categories = [ '/TECH' , '/CLOTHES']
        const {products ,  idCount , selectorChange ,  selector , Increase , CheckOut ,Decrease} = this.props
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
                <ProductList selector={selector}  categories={'Tech'} idCount={idCount}/>
            </div>
        )
    }
}
export default Tech
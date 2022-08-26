import React from "react";
import '../App.css';
import NavBar from "./NavBar";
import ProductList from "./Products/ProductList";

class ClothePage extends React.Component{
    render(){
        const categories = [ '/WOMEN' , '/MAN' , "/KIDS"]
        const {products , idCount  , selectorChange ,  selector , Increase , CheckOut ,Decrease} = this.props

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
                <ProductList selector={selector}  categories={'Clothes'} idCount={idCount}/>
            </div>
        )
    }
}
export default ClothePage
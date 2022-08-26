import React from "react";
import NavBar from "../NavBar";
import ProductList from "../Products/ProductList";

class KidsPage extends React.Component{
    render() {
        const categories = [ '/WOMEN' , '/MAN' , "/KIDS"]
        const {products ,  idCount , selectorChange ,  selector , Increase , CheckOut ,Decrease} = this.props
        return (
            <div>
                <NavBar
                    categories={categories}
                    Increase ={Increase}
                    Decrease ={Decrease}
                    products={products}
                    selectorChange={selectorChange}
                    selector={selector}
                    CheckOut={CheckOut}
                />
                <ProductList selector={selector}  categories={'Kids'} idCount={idCount}/>
            </div>
        );
    }
}
export default KidsPage;
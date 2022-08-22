import React from "react"
import bar from './CssModules/Navbar.module.css'
import {Link} from "react-router-dom";
import basket from '../img/basket.png'
import logo from '../img/logo.png'
import Cart from "./Cart/Cart";

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            cartIsOn : false,
        }
        this.setCartOn = this.setCartOn.bind(this);
        this.selectorChange= this.props.selectorChange
    };
    setCartOn(){
        this.setState({
            cartIsOn : !this.state.cartIsOn
        })
    }
    render(){
        return(
            <div className={bar.navbar} >
                <ul className={bar.Categories}>
                    {
                        this.props.categories.map((name)=>
                        <Link to ={name} key={name}>
                            <li>{name.substring(1)}</li>
                        </Link>)
                    }
                </ul>
                <Link to ='/'>
                    <div className={bar.logo}>
                        <img src={logo} alt="Logo"/>
                    </div>
                </Link>
                <div className={bar.currency}>
                    <ul>
                        <li>
                            <select className={bar.select} value={this.props.selector} name="currency" onChange={(event)=>this.selectorChange(event)}>
                                <option value="USD">$ USD</option>
                                <option value="GBP">£ GBP</option>
                                <option value="JPY">¥ JPY</option>
                                <option value="RUB">₽ RUB</option>
                                <option value="AUD">$ AUD</option>
                            </select>
                        </li>
                        <li>
                            <button onClick={()=>this.setCartOn()}>
                                <img src={basket} alt="cart" height='24px' width='30px'/>
                            </button>
                            <h5 className={bar.totalItems} style={!this.props.products?.length?{ display : 'none'}:{}}>{this.props.products?.length}</h5>
                        </li>
                    </ul>
                </div>
                {this.state.cartIsOn && (
                    <Cart
                        products={this.props.products}
                        addProduct={this.props.addProduct}
                        removeProduct={this.props.removeProduct}
                        selector={this.props.selector}
                        CheckOut={this.props.CheckOut}
                    />
                )}
            </div>
        )
    }
}
export default NavBar
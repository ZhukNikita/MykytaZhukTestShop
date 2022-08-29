import cart from '../CssModules/Cart.module.css'
import React from 'react';
import CartProductList from "./CartProductList";
import {Link} from "react-router-dom";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: ''
        }
    }

    Order() {
        this.setState({
            order:
                <div className={cart.order}>
                    <h1 style={{
                        color: '#5ECE7B',
                        fontFamily: 'Raleway',
                        textAlign: "center",
                        marginRight: '70px',
                        marginTop: '30px'
                    }}>Successful</h1>
                    <h3 style={{color: '#5ECE7B', fontFamily: 'Raleway', textAlign: "center"}}>Thank You</h3>
                </div>
        })
        this.props.CheckOut()
    }

    render() {
        const table = {};
        const res = this.props.products?.filter(({name}) => (!table[name] && (table[name] = 1)));
        let total = [];
        let x = 0
        for (let i = 0; i < this.props.products.length; i++) {
            let a = this.props.products[i]
            if (this.props.selector === "USD") total.push((a.prices[0].amount)*(a.count))
            if (this.props.selector === "GBP") total.push((a.prices[1].amount)*(a.count))
            if (this.props.selector === "JPY") total.push((a.prices[3].amount)*(a.count))
            if (this.props.selector === "RUB") total.push((a.prices[4].amount)*(a.count))
            if (this.props.selector === "AUD") total.push((a.prices[2].amount)*(a.count))
        }
        let b = total.map(i => x += i, x = 0).reverse()[0] ?? '0'
        return (
            <div className={cart.messageWrapper}>
                <div className={cart.message}>
                    <div className={cart.Products}>
                        <h2>
                            <span style={{fontWeight: 700, fontSize: 18}}>My bag, </span>
                            <span style={{fontWeight: 500, fontSize: 16}}>{this.props.bagItems} items</span>
                        </h2>
                        {this.state.order}
                        {
                            res.length > 0 ? res.map((product) =>
                                <CartProductList
                                    key={product.id}
                                    product={product}
                                    products={this.props.products}
                                    addProduct={this.props.addProduct}
                                    removeProduct={this.props.removeProduct}
                                    openCart={this.props.openCart}
                                    selector={this.props.selector}
                                    Increase = {this.props.Increase}
                                    Decrease = {this.props.Decrease}
                                />): 'Cart is empty'
                        }
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: "center",
                            marginTop: 32
                        }}>
                            <h2>Total</h2>
                            <h2>
                                {this.props.selector === 'USD' ? '$' : ''}
                                {this.props.selector === 'GBP' ? '£' : ''}
                                {this.props.selector === 'JPY' ? '¥' : ''}
                                {this.props.selector === 'RUB' ? '₽' : ''}
                                {this.props.selector === 'AUD' ? '$' : ''}
                                {b > 1 ? b.toFixed(2) : b}
                            </h2>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: "center",
                            marginTop: 32
                        }}>
                            <Link to='/CartPage'>
                                <button className={cart.ViewBag}><h2>VIEW BAG</h2></button>
                            </Link>
                            <button className={cart.CheckOut} onClick={this.Order.bind(this)}><h2>CHECK OUT</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
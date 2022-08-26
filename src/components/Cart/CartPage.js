import React from "react";
import NavBar from "../NavBar";
import cartPage from '../CssModules/CartPage.module.css'
import CartProductItem from "./CartProductItem";

class CartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            order: ''
        }
    }

    Order() {
        this.setState({
            order: <div>
                <div className={cartPage.loading}></div>
                <h4 style={{marginLeft: '150px'}}><p>Waiting for bank response</p></h4>
            </div>
        })
        if (this.props.products.length === 0) {
            this.setState({order: ''})
        } else {
            setTimeout(() => {
                this.setState({
                    order:
                        <div>
                            <h1 style={{color: '#5ECE7B', fontFamily: 'Raleway', marginLeft: '150px'}}>Successful</h1>
                            <h3 style={{color: '#5ECE7B', fontFamily: 'Raleway', marginLeft: '150px'}}>Thank You</h3>
                        </div>
                })
            }, 2000)
        }
        this.props.CheckOut()
    }

    render() {
        let quantity = []
        let total = [];
        let x = 0
        for (let i = 0; i < this.props.products.length; i++) {
            let a = this.props.products[i]
            if (this.props.selector === "USD") total.push((a.prices[0].amount)*(a.count))
            if (this.props.selector === "GBP") total.push((a.prices[1].amount)*(a.count))
            if (this.props.selector === "JPY") total.push((a.prices[3].amount)*(a.count))
            if (this.props.selector === "RUB") total.push((a.prices[4].amount)*(a.count))
            if (this.props.selector === "AUD") total.push((a.prices[2].amount)*(a.count))
            quantity.push(a.count)
        }
        let TotalPrice = total.map(i => x += i, x = 0).reverse()[0] ?? '0'
        let TotalQuantity = quantity.map(i => x += i, x = 0).reverse()[0] ?? '0'
        let tax = TotalPrice > 1 ? TotalPrice / 100 * 21 : 0
        return (
            <div>
                <NavBar
                    products={this.props.products}
                    categories={['/TECH', '/CLOTHES']}
                    selectorChange={this.props.selectorChange}
                    selector={this.props.selector}
                    Increase ={this.props.Increase}
                    Decrease ={this.props.Decrease}
                />
                <h2 className={cartPage.Page}>CART</h2>
                {
                    this.props.products.map((product) =>
                    <CartProductItem
                        key={product.id}
                        product={product}
                        products={this.props.products}
                        Increase ={this.props.Increase}
                        Decrease ={this.props.Decrease}
                        selector={this.props.selector}
                    />
                )}
                <div className={cartPage.CheckOutFlex}>
                    <div>
                        <div className={cartPage.CheckOutInfo}>
                            <div className={cartPage.TotalPrice}>
                                <h2>Tax 21%:</h2>
                                <h2 style={{fontWeight: 700}}>
                                    {this.props.selector === 'USD' ? '$' : ''}
                                    {this.props.selector === 'GBP' ? '£' : ''}
                                    {this.props.selector === 'JPY' ? '¥' : ''}
                                    {this.props.selector === 'RUB' ? '₽' : ''}
                                    {this.props.selector === 'AUD' ? '$' : ''}
                                    {tax.toFixed(2)}
                                </h2>
                            </div>
                            <div className={cartPage.TotalPrice}>
                                <h2>Quantity:</h2>
                                <h2 style={{fontWeight: 700}}>
                                    {TotalQuantity}
                                </h2>
                            </div>
                            <div className={cartPage.TotalPrice}>
                                <h2>Total:</h2>
                                <h2 style={{fontWeight: 700}}>
                                    {this.props.selector === 'USD' ? '$' : ''}
                                    {this.props.selector === 'GBP' ? '£' : ''}
                                    {this.props.selector === 'JPY' ? '¥' : ''}
                                    {this.props.selector === 'RUB' ? '₽' : ''}
                                    {this.props.selector === 'AUD' ? '$' : ''}
                                    {TotalPrice > 1 ? TotalPrice.toFixed(2) : TotalPrice}
                                </h2>
                            </div>
                            <button className={cartPage.Order} onClick={this.Order.bind(this)}>ORDER</button>
                        </div>
                    </div>
                    {this.state.order}
                </div>
            </div>
        )
    }
}

export default CartPage
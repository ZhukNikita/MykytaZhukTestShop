import React from "react";
import items from '../CssModules/ProductItem.module.css'
import {Link} from "react-router-dom";



class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.idCount = this.props.idCount
        this.product = this.props.product;
        this.inStock = this.props.product.inStock
        this.photo = this.product.gallery[0]
        this.index = this.props.index
        this.categories = this.props.categories
    }

    render(){
        return(
                <div className={items.ProductItem} onClick={()=>this.idCount(this.index , this.photo ,this.props.category)}>
                    <Link to={this.inStock ? '/Product' : '#'}>
                        {!this.inStock && (
                            <div className={items.stock}> Out of stock</div>
                        )}
                        <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center'}}>
                            <img src={this.product.gallery[0]} alt='Product' height="330px" width="330px" style={!this.inStock?{ opacity: 0.36}:{}}/>
                        </div>
                        <div className={items.ProductTitle}>
                            <h2 className={items.title}>{this.product.name}</h2>
                            <br/>
                            {this.props.selector === "USD" ? <h2 className={items.price}>{`$ ` +  this.product.prices[0].amount}</h2> : ''}
                            {this.props.selector === "GBP" ? <h2 className={items.price}>{`£ ` +  this.product.prices[1].amount}</h2> : ''}
                            {this.props.selector === "JPY" ? <h2 className={items.price}>{`¥ ` +  this.product.prices[3].amount}</h2> : ''}
                            {this.props.selector === "RUB" ? <h2 className={items.price}>{`₽ ` +  this.product.prices[4].amount}</h2> : ''}
                            {this.props.selector === "AUD" ? <h2 className={items.price}>{`$ ` +  this.product.prices[2].amount}</h2> : ''}
                        </div>
                    </Link>
                </div>
        )
    }
}
export default ProductItem
import React from "react";
import {Query} from "@apollo/client/react/components";
import {ALL_CARDS} from "../../apollo/cards";
import css from '../CssModules/ProductList.module.css'
import ProductItem from "./ProductItem";


class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.idCount = this.props.idCount;
    }
    render() {
        return(
            <div>
                <h1>Category {this.props.categories}</h1>
                <div className={css.List}>
                    <Query query = {ALL_CARDS} >
                        {
                            ({loading  , data}) =>{
                                if(loading) return ''
                                if(this.props.categories === 'Women' )  {
                                    let product = data.categories[0].products[1]
                                    return <ProductItem
                                        key = {product.id}
                                        selector={this.props.selector}
                                        index = {1}
                                        category={'ALL'}
                                        categories={['/WOMEN' , '/MAN' , '/KIDS']}
                                        product = {product}
                                        idCount={this.idCount}
                                    />}
                                if(this.props.categories === 'Man'){
                                    let product = data.categories[0].products[0]
                                    return <ProductItem
                                        key = {product.id}
                                        selector={this.props.selector}
                                        index = {0} category={'ALL'}
                                        categories={['/WOMEN' , '/MAN' , '/KIDS']}
                                        product = {product}
                                        idCount={this.idCount}
                                    />}
                                if(this.props.categories === 'Kids') {
                                    let product = data.categories[0].products[0]
                                    return <ProductItem
                                        key = {product.id}
                                        selector={this.props.selector}
                                        index = {0}
                                        category={'ALL'}
                                        categories={['/WOMEN' , '/MAN' , '/KIDS']}
                                        product = {product}
                                        idCount={this.idCount}
                                    />}
                                if(this.props.categories === 'All'){
                                    return data.categories[0].products.map((product , index)=>
                                        <ProductItem
                                            index = {index}
                                            key = {product.id}
                                            selector={this.props.selector}
                                            category={'ALL'}
                                            categories={['/TECH' , '/CLOTHES']}
                                            product = {product}
                                            idCount={this.idCount} />)}
                                if(this.props.categories === 'Tech'){
                                    return data.categories[2].products.map((product , index)=>
                                        <ProductItem
                                            index = {index}
                                            key = {product.id}
                                            selector={this.props.selector}
                                            category={'TECH'}
                                            categories={['/TECH' , '/CLOTHES']}
                                            product = {product}
                                            idCount={this.idCount} />)}
                                if(this.props.categories === 'Clothes'){
                                    return data.categories[1].products.map((product , index)=>
                                        <ProductItem
                                            index = {index}
                                            key = {product.id}
                                            category={'ALL'}
                                            categories={['/WOMEN' , '/MAN' , '/KIDS']}
                                            selector={this.props.selector}
                                            product = {product}
                                            idCount={this.idCount}
                                        />)}
                            }
                        }
                    </Query>
                </div>
            </div>
        )
    }
}
export default ProductList;
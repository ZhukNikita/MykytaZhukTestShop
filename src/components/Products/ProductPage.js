import React from "react";
import NavBar from "../NavBar";
import {Query} from "@apollo/client/react/components";
import {ALL_CARDS} from "../../apollo/cards";
import product from "../CssModules/ProductPage.module.css"
import SizeButtons from "../StylesComponents/SizeButtons";
import ColorButtons from "../StylesComponents/ColorButtons";
import AttributesButton from "../StylesComponents/Attributes";
import TouchBarActive from "../StylesComponents/TouchBarActive";


class ProductPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            img: '',
            activeColor: '',
            activeSize: '',
            activeAttributes: '',
            activeButton: '',
            size: '',
            color: '',
            touchbar: '',
            usbPort: '',
        }
        this.setActiveColors = this.setActiveColors.bind(this)
        this.setActiveSizes = this.setActiveSizes.bind(this)
        this.setActiveAttributes = this.setActiveAttributes.bind(this)
        this.setActiveButton = this.setActiveButton.bind(this)
    }
    setActiveColors(color){
        this.setState({
            activeColor : color
        })
    }
    setActiveButton(attribute){
        this.setState({
            activeButton : attribute
        })
    }

    setActiveAttributes(attribute){
        this.setState({
            activeAttributes : attribute,
        })
    }

    setActiveSizes(name){
        this.setState({
            size : name,
            activeSize : name,
            message : ''
        })

    }
    setImg(photo){
        this.setState({
            img : <img className={product.fullImg}  src={photo} alt="Product"/>
        })
        localStorage.setItem('photo' , photo)

}
    componentDidMount() {
        this.setImg(localStorage.getItem('photo'))

    }
    render() {
        const categories = [ '/TECH' , '/CLOTHES']
        const { id , addProduct , selectorChange ,  selector , Increase , CheckOut ,Decrease ,category} = this.props
        return(
            <div className='Page'>
                <NavBar
                    products={this.props.products}
                    id ={id}
                    categories={categories}
                    addProduct={addProduct}
                    selectorChange={selectorChange}
                    selector={selector }
                    CheckOut={CheckOut}
                    Increase ={Increase}
                    Decrease ={Decrease}
                />
                <Query query = {ALL_CARDS}>
                    {
                        ({loading  , data}) =>{
                            if(loading) return ''
                            let products = []
                            if(category === "ALL") products = data.categories[0].products[id]
                            if(category === "CLOTHES") products = data.categories[1].products[id]
                            if(category === "TECH") products = data.categories[2].products[id]
                            const arr = {
                                id : Date.now(),
                                count: 1 ,
                                name : products?.name,
                                brand : products?.brand,
                                gallery: products?.gallery,
                                attributes : products?.attributes,
                                prices : products?.prices,
                                activeAttributes: this.state.activeAttributes,
                                activeButton :this.state.activeButton,
                                activeColor: this.state.activeColor,
                                activeSize : this.state.activeSize
                            }
                            return (
                                <div className={product.ProductPage}>
                                    <div className={product.ProductPageFlex}>
                                        <div className={product.Imgflex}>
                                            {
                                                products?.gallery.map((item , index)=>
                                                <div onClick={()=>this.setImg(item)} key={index}>
                                                    <img src={item} alt='ShowProduct' height={80} width={80} />
                                                </div>
                                                )
                                            }
                                        </div>
                                        <div>
                                            {this.state.img}
                                        </div>
                                        <div className={product.ProductInfo}>
                                            <h2>{products?.name}</h2>
                                            <h2 style={{fontWeight: 500}}>{products?.brand}</h2>
                                            {products?.attributes.map((name)=>
                                                <div key={name.name}>
                                                    <br/>
                                                    <h4>{(name.name).toUpperCase()}:</h4>

                                                    <div className={product.ProductButtons}>
                                                        {
                                                            name.name === 'Capacity' &&
                                                                (name.items.map(value=>
                                                                    <SizeButtons
                                                                        key={value.value}
                                                                        name={value.value}
                                                                        style={product}
                                                                        activeSize={this.state.activeSize}
                                                                        setActiveSizes={this.setActiveSizes}
                                                                    />
                                                                ))

                                                         }
                                                        {
                                                            name.name === 'With USB 3 ports' &&
                                                                (name.items.map(value=>
                                                                    <AttributesButton
                                                                        key={value.value}
                                                                        name={value.value}
                                                                        style={product}
                                                                        activeAttributes={this.state.activeAttributes}
                                                                        setActiveAttributes={this.setActiveAttributes}
                                                                    />
                                                                ))

                                                        }
                                                        {
                                                            name.name === 'Touch ID in keyboard' &&
                                                                (name.items.map(value=>
                                                                    <TouchBarActive
                                                                        key={value.value}
                                                                        name={value.value}
                                                                        style={product}
                                                                        activeButton={this.state.activeButton}
                                                                        setActiveButton={this.setActiveButton}
                                                                    />
                                                                ))

                                                        }
                                                        {
                                                            name.name === 'Color' &&
                                                            (name.items.map(value =>
                                                                <ColorButtons
                                                                    key ={value.value}
                                                                    style={product}
                                                                    activeColor={this.state.activeColor}
                                                                    color={value.value}
                                                                    setActiveColors={this.setActiveColors}
                                                                />
                                                            ))

                                                        }
                                                        {
                                                            name.name === 'Size' &&
                                                                (name.items.map(value =>
                                                                    <SizeButtons
                                                                        key={value.value}
                                                                        name={value.value}
                                                                        style={product}
                                                                        activeSize={this.state.activeSize}
                                                                        setActiveSizes={this.setActiveSizes}
                                                                    />
                                                                ))
                                                        }
                                                    </div>
                                                </div>
                                            )}
                                            <br/>
                                            <h4>PRICE:</h4>
                                            {selector === "USD" ? <h3>{`$ ` +  products?.prices[0].amount}</h3> : ''}
                                            {selector === "GBP" ? <h3>{`£ ` + products?.prices[1].amount}</h3> : ''}
                                            {selector === "JPY" ? <h3>{`¥ ` +  products?.prices[3].amount}</h3> : ''}
                                            {selector === "RUB" ? <h3>{`₽ ` +  products?.prices[4].amount}</h3> : ''}
                                            {selector === "AUD" ? <h3>{`$ ` +  products?.prices[2].amount}</h3> : ''}
                                            <br/>
                                            {

                                                !this.props.products.find(item => item.name === arr.name) && (products?.attributes[0] === undefined ?
                                                    <button className={product.addToCart} onClick={()=>addProduct(arr)}>ADD TO CART</button>:
                                                    (this.state.size === '') ?
                                                    <button className={product.addToCart} style={{background: "grey"}}
                                                            onClick={()=> this.setState({message: `Choose any ${(products?.attributes[0].name).toLowerCase()} please`})}>
                                                        ADD TO CART
                                                    </button>
                                                    : <button className={product.addToCart} onClick={()=>addProduct(arr)}>ADD TO CART</button>) ||
                                                <button className={product.addToCart} style={{background: "grey"}}
                                                        onClick={()=> this.setState({message: `Already in your cart`})}>
                                                    ADD TO CART
                                                </button>
                                            }
                                            <h5 style={{marginLeft: 100 , color: 'red'}}>{this.state.message}</h5>
                                            <h5>{products?.description.replace(/(\<(\/?[^>]+)>)/g, '')}</h5>
                                        </div>
                                    </div>
                                </div>)
                        }
                    }
                </Query>
            </div>
        )
    }
}
export default ProductPage;
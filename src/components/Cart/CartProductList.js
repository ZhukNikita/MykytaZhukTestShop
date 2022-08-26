import cartList from '../CssModules/CartProductList.module.css'
import React  from 'react';
import SizeButtons from "../StylesComponents/SizeButtons";
import ColorButtons from "../StylesComponents/ColorButtons";
import plus from "../../img/plus.svg"
import minus from "../../img/minus.svg"
import AttributesButton from "../StylesComponents/Attributes";
import TouchBarActive from "../StylesComponents/TouchBarActive";

class CartProductList extends React.Component{
    constructor(props) {
        super(props);
        this.product = this.props.product
        this.state = {
            img: '',
            activeColor: this.product.activeColor,
            activeSize: this.product.activeSize,
            activeAttributes: this.product.activeAttributes,
            activeButton: this.product.activeButton,
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
            touchbar : attribute,
            activeButton : attribute
        })
    }

    setActiveAttributes(attribute){
        this.setState({
            usbPort: attribute,
            activeAttributes : attribute,
        })
    }

    setActiveSizes(name){
        this.setState({
            size : name,
            activeSize : name,
        })
    }
    render(){
        let arr = this.props.products;
        let result = {};
        for (let i = 0; i < arr.length; ++i)
        {   let a = arr[i].name;
            if (result[a] !== undefined) ++result[a];
            else result[a] = 1;}
        return(
            <div>
                <div className={cartList.CartList}>
                    <div className={cartList.Info}>
                        <h2 className={cartList.Title}>{this.product.name}</h2>
                        <h2 className={cartList.Title}>{this.product.brand}</h2>
                            {this.props.selector === "USD" ? <h2 className={cartList.Price}>{`$ ` + (this.product.prices[0].amount).toFixed(2)}</h2> : ''}
                            {this.props.selector === "GBP" ? <h2 className={cartList.Price}>{`£ ` + (this.product.prices[1].amount).toFixed(2)}</h2> : ''}
                            {this.props.selector === "JPY" ? <h2 className={cartList.Price}>{`¥ ` + (this.product.prices[3].amount).toFixed(2)}</h2> : ''}
                            {this.props.selector === "RUB" ? <h2 className={cartList.Price}>{`₽ ` + (this.product.prices[4].amount).toFixed(2)}</h2> : ''}
                            {this.props.selector === "AUD" ? <h2 className={cartList.Price}>{`$ ` +  (this.product.prices[2].amount).toFixed(2)}</h2> : ''}
                        <div>
                            {this.product.attributes.map((name)=>
                                <div key={name.name}>
                                    <h4 className={cartList.Size}>{name.name}:</h4>
                                    <div className={cartList.ColorButtons}>
                                        {
                                            name.name === 'Capacity' &&
                                            (name.items.map(value=>
                                                <SizeButtons
                                                    key={value.value}
                                                    name={value.value}
                                                    style={cartList}
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
                                                    style={cartList}
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
                                                    style={cartList}
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
                                                    style={cartList}
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
                                                    style={cartList}
                                                    activeSize={this.state.activeSize}
                                                    setActiveSizes={this.setActiveSizes}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={cartList.TotalProduct}>
                        <button className={cartList.buttons} onClick={()=>this.props.Increase(this.product.id)}>
                            <img src={plus} alt="add" width={10} height={10}/>
                        </button>
                        <h4 className={cartList.total}>{this.product.count}</h4>
                        <button className={cartList.buttons} onClick={()=>this.props.Decrease(this.product.id)}>
                            <img src={minus} alt="add" width={10} height={10}/>
                        </button>
                    </div>
                    <div style={{width: '150px'}}>
                        <img src={this.product.gallery[0]} alt="ProductPhoto2" height='100%' width='100%'/>
                    </div>
                </div>
            </div>
        )}
}
export default CartProductList
import React from "react";
import cartPage from '../CssModules/CartPage.module.css'
import CapacityButtons from "../StylesComponents/CapacityButtons";
import AttributesButton from "../Attributes";
import TouchBarActive from "../StylesComponents/TouchBarActive";
import ColorButtons from "../StylesComponents/ColorButtons";
import SizeButtons from "../StylesComponents/SizeButtons";
import plus from "../../img/plus.svg";
import minus from "../../img/minus.svg";
import ImgSlider from "../ImgSlider";

class CartProductItem extends React.Component {
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

    setActiveColors(color) {
        this.setState({
            activeColor: color
        })
    }

    setActiveButton(attribute) {
        this.setState({
            touchbar: attribute,
            activeButton: attribute
        })
    }

    setActiveAttributes(attribute) {
        this.setState({
            usbPort: attribute,
            activeAttributes: attribute,
        })
    }

    setActiveSizes(name) {
        this.setState({
            size: name,
            activeSize: name,
        })

    }

    render() {
        let arr = this.props.products;
        let result = {};
        for (let i = 0; i < arr.length; ++i) {
            let a = arr[i].name;
            if (result[a] !== undefined) ++result[a];
            else result[a] = 1;
        }
        return (
            <div className={cartPage.ProductItem}>
                <div className={cartPage.CartList}>
                    <div className={cartPage.Info}>
                        <h2 className={cartPage.Title}>{this.product.name}</h2>
                        <h2 className={cartPage.Brand}>{this.product.brand}</h2>
                        {this.props.selector === "USD" ?
                            <h2 className={cartPage.Price}>{'$ ' + this.product.prices[0].amount}</h2> : ''}
                        {this.props.selector === "GBP" ?
                            <h2 className={cartPage.Price}>{'£ ' + this.product.prices[1].amount}</h2> : ''}
                        {this.props.selector === "JPY" ?
                            <h2 className={cartPage.Price}>{'¥ ' + this.product.prices[3].amount}</h2> : ''}
                        {this.props.selector === "RUB" ?
                            <h2 className={cartPage.Price}>{"₽ " + this.product.prices[4].amount}</h2> : ''}
                        {this.props.selector === "AUD" ?
                            <h2 className={cartPage.Price}>{'$ ' + this.product.prices[2].amount}</h2> : ''}
                        <div>
                            {this.product.attributes.map((name) =>
                                <div key={name.name}>
                                    <h4 className={cartPage.Size}>{(name.name).toUpperCase()}:</h4>
                                    <div className={cartPage.ColorButtons}>
                                        {
                                            name.name === 'Capacity' &&
                                            (name.items.map(value =>
                                                <CapacityButtons
                                                    key={value.value}
                                                    name={value.value}
                                                    style={cartPage}
                                                    activeSize={this.state.activeSize}
                                                    setActiveSizes={this.setActiveSizes}
                                                />
                                            ))

                                        }
                                        {
                                            name.name === 'With USB 3 ports' &&
                                            (name.items.map(value =>
                                                <AttributesButton
                                                    key={value.value}
                                                    name={value.value}
                                                    style={cartPage}
                                                    activeAttributes={this.state.activeAttributes}
                                                    setActiveAttributes={this.setActiveAttributes}
                                                />
                                            ))

                                        }
                                        {
                                            name.name === 'Touch ID in keyboard' &&
                                            (name.items.map(value =>
                                                <TouchBarActive
                                                    key={value.value}
                                                    name={value.value}
                                                    style={cartPage}
                                                    activeButton={this.state.activeButton}
                                                    setActiveButton={this.setActiveButton}
                                                />
                                            ))

                                        }
                                        {
                                            name.name === 'Color' &&
                                            (name.items.map(value =>
                                                <ColorButtons
                                                    key={value.value}
                                                    style={cartPage}
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
                                                    style={cartPage}
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
                    <div className={cartPage.TotalProduct}>
                        <div className={cartPage.TotalButtons}>
                            <button className={cartPage.buttons} onClick={() => this.props.addProduct(this.product)}>
                                <img src={plus} alt="add" width={15} height={15}/>
                            </button>
                            <h4 className={cartPage.total}>{result[this.product.name]}</h4>
                            <button className={cartPage.buttons} onClick={() => this.props.removeProduct(this.product)}>
                                <img src={minus} alt="add" width={15} height={15}/>
                            </button>
                        </div>
                        <ImgSlider slides={this.product.gallery}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartProductItem
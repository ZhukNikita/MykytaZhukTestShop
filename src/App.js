import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllPage from "./components/AllPage";
import NoMatch from "./components/NoMatch";
import TechPage from "./components/TechPage";
import ClothesPage from "./components/ClothesPage";
import ProductPage from "./components/Products/ProductPage";
import CartPage from "./components/Cart/CartPage";
import WomanPage from "./components/WomenPage/WomanPage";
import ManPage from "./components/ManPage/ManPage";
import KidsPage from "./components/KidsPage/KidsPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            Products: [],
            selector: 'USD',
            category: '',
        }
        this.idCount = this.idCount.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
        this.selectorChange = this.selectorChange.bind(this)
        this.Increase = this.Increase.bind(this)
        this.Decrease = this.Decrease.bind(this)
    }

    selectorChange(e) {
        this.setState({selector: e.target.value});
    };

    addProduct(arr) {
        this.setState({Products: [...this.state.Products, arr]})
        localStorage.setItem('products', JSON.stringify(this.state.Products))
    }

    removeProduct(id) {
        let removeProduct = this.state.Products.filter((product) => {
            return id !== product.id
        })
        this.setState({Products: removeProduct})
    }

    idCount(id, photo, category) {
        this.setState({
            id: id,
            category: category
        })
        localStorage.setItem('key', id)
        localStorage.setItem('photo', photo)
        localStorage.setItem('category', category)
    }

    componentDidMount() {
        const Products = JSON.parse(localStorage.getItem('products')) ?? []
        this.setState({Products})
        this.idCount(
            localStorage.getItem('key'),
            localStorage.getItem('photo'),
            localStorage.getItem('category'))
    }

    componentDidUpdate(prevProps) {
        if (this.state.Products !== prevProps.Products) {
            localStorage.setItem('products', JSON.stringify(this.state.Products))
        }
    }

    CheckOut() {
        this.setState({
            Products: []
        })
    }

    Increase(id) {
        const products = this.state.Products.slice();
        products.forEach((product) => {
            if (product.id === id) {
                product.count = ++product.count;
            }
        });
        this.setState({products});
    }

    Decrease(id) {
        const products = this.state.Products.slice();
        products.forEach((product) => {
            if (product.id === id) {
                product.count = product.count - 1;
            }
            if (product.count === 0) {
                this.removeProduct(id)
            }
        });
        this.setState({products});
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <AllPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                CheckOut={this.CheckOut.bind(this)}
                                addProduct={this.addProduct}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="/TECH" element={
                            <TechPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                CheckOut={this.CheckOut.bind(this)}
                                addProduct={this.addProduct}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="/CLOTHES" element={
                            <ClothesPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                CheckOut={this.CheckOut.bind(this)}
                                addProduct={this.addProduct}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="/Product" element={
                            <ProductPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                id={this.state.id}
                                category={this.state.category}
                                addProduct={this.addProduct}
                                CheckOut={this.CheckOut.bind(this)}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="/CartPage" element={
                            <CartPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                CheckOut={this.CheckOut.bind(this)}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="/WOMEN" element={
                            <WomanPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                CheckOut={this.CheckOut.bind(this)}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="/MAN" element={
                            <ManPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                CheckOut={this.CheckOut.bind(this)}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="/KIDS" element={
                            <KidsPage
                                products={this.state.Products}
                                selector={this.state.selector}
                                idCount={this.idCount}
                                selectorChange={this.selectorChange}
                                CheckOut={this.CheckOut.bind(this)}
                                Increase={this.Increase}
                                Decrease={this.Decrease}
                            />}>
                        </Route>
                        <Route path="*" element={<NoMatch/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
import { Component } from "react";

class EditProduct extends Component{

    state = {
        currentProduct: null
    }

    constructor(props){
        super(props);

        console.log("EditProduct constructor");
        this.state.currentProduct = this.props.product;
    }

    changeName = (evt) => {
        
        const value  = evt.target.value;
        //create a copy of currenetProduct
        const product = {...this.state.currentProduct};
        //modify the copy
        product.name = value;
        //update the state
        this.setState({
            currentProduct: product
        });
    }

    changePrice = (evt) => {
        
        const value  = evt.target.value;
        //create a copy of currenetProduct
        const product = {...this.state.currentProduct};
        //modify the copy
        product.price = Number(value);
        //update the state
        this.setState({
            currentProduct: product
        });
    }
    changeDescription = (evt) => {
        
        const value  = evt.target.value;
        //create a copy of currenetProduct
        const product = {...this.state.currentProduct};
        //modify the copy
        product.description = value;
        //update the state
        this.setState({
            currentProduct: product
        });
    }

    render(){
        return (
            <div>
                <h4>Edit Product: {this.props.product.id}</h4>

                <div>
                    <label>Name</label>
                    <input placeholder="Name" 
                            value={this.state.currentProduct.name} onChange={this.changeName}/>
                </div>
                <div>
                    <label>Price</label>
                    <input placeholder="Price" value={this.state.currentProduct.price} 
                                                                    onChange={this.changePrice}/>
                </div>
                <div>
                    <label>Description</label>
                    <input placeholder="Description" value={this.state.currentProduct.description}
                                                                onChange={this.changeDescription}/>
                </div>

                <div>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}

export default EditProduct;
import {Component} from 'react';
import axios from 'axios';
import './ListProducts.css';
import EditProduct from './EditProduct';

class ListProducts extends Component{

    //immutable
    state = {
        products: [],
        selectedProduct: null
    };
    url = "http://localhost:9000/products";

    async componentDidMount(){
       
        //const url = "http://localhost:9000/products";

        try {
            
            const response = await axios.get(this.url);
            console.log("response", response);
            this.setState({
                products: response.data
            });

        } catch (error) {

            console.log("error", error);
        }

        
        
    }

    deleteProduct = async (product, index) => {
        //alert("deleteing product id: " +  product.id);
        const url = this.url + "/" + product.id;

        try {
            
            await axios.delete(url);
            //copy of the state.products
            const products = [...this.state.products];
            //modify the copy
            products.splice(index, 1);
            //update the state
            this.setState({
                products
            });


            alert("deleted product id: " +  product.id);

        } catch (error) {

            alert("failed to delete product id: " +  product.id);
        }
    }

    editProduct = (product) => {

        this.setState({
            selectedProduct: product
        })
    }

    editUpdate = (updatedProduct)=> {

        console.log("updatedProduct", updatedProduct)

    }

    editCancel = ()=> {

        console.log("editCancel")
    }

    render(){

        return (
            <div>
                <h3>List Products</h3>

                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {this.state.products.map((product, index) => {

                        return (
                            <div className='product' key={product.id}>
                                <p>Id: {product.id}</p>
                                <p>Name: {product.name}</p>
                                <p>Description: {product.description}</p>
                                <p>Price: {product.price}</p>
                                <div>
                                    <button onClick={() => {this.editProduct(product)}}>Edit</button> &nbsp;
                                    <button onClick={() => {this.deleteProduct(product, index);}}>Delete</button>
                                </div>

                            </div>

                        )
                    })}
                </div>

                <div>
                    {this.state.selectedProduct !== null ? 
                                <EditProduct key={this.state.selectedProduct.id} 
                                                product={this.state.selectedProduct}
                                                onSave={this.editUpdate}
                                                onCancel={this.editCancel}/> 
                                : null}
                </div>
            </div>
        )
    }
}

export default ListProducts;
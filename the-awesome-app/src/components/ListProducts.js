import {Component} from 'react';
import axios from 'axios';

class ListProducts extends Component{


    state = {
        products: []
    };

    async componentDidMount(){
       
        const url = "http://localhost:9000/products";

        try {
            
            const response = await axios.get(url);
            console.log("response", response);
            this.setState({
                products: response.data
            });

        } catch (error) {

            console.log("error", error);
        }

        
        
    }
    render(){

        return (
            <div>
                <h3>List Products</h3>

                <div>
                    {this.state.products.map((product, index) => {

                        return (
                            <div key={product.id}>
                                <p>Id: {product.id}</p>
                                <p>Name: {product.name}</p>
                                <p>Description: {product.description}</p>
                                <p>Price: {product.price}</p>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListProducts;
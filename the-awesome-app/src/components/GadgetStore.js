import { useEffect, useState } from "react";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

function GadgetStore(){

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts(){
        try {
            
            const url = "http://localhost:9000/secure_products"
            // const headers = {"Authorization": `Bearer ${auth.accessToken}`}
            // const response = await axios.get(url, {headers} );
            const response = await axios.get(url);
            setProducts(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    function addToCart(product){
        dispatch({
            type: "ADDTOCART",
            data: {product, qty: 1}
        });
    }

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button href="#" className="btn btn-primary" 
                                            onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h3>Gadget Store</h3>
            {renderProducts()}
        </div>
    )

}

export default GadgetStore;
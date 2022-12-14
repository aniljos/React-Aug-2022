import {useSelector} from 'react-redux';

function ViewCart(){

    const cart = useSelector(state => state.gadget.cart);

    return (
        <div>
            <h3>Cart</h3>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product.description}</p>
                                    <p className="card-text">Quantity: {item.qty}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success">Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewCart;
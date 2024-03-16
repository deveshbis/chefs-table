
import PropTypes from 'prop-types'
import Carted from '../../Carted/Carted';

const Cart = ({ cart }) => {
    return (
        <div className="w-1/3">
            <h2 className="text-2xl text-center">Want to cook: {cart.length}</h2>
            <hr />
            
            {
                cart.map(cart => <Carted key={cart.id} carted={cart}></Carted>)
            }
            
            
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array
}

export default Cart;

import PropTypes from 'prop-types'
import Carted from '../../Carted/Carted';
import { useState } from 'react';
import Prepare from './Prepare';

const Cart = ({ cart}) => {
    const [prepare, setPrepare] =useState([]);

    const handlePrepare = carted =>{
        const newPrepare = [...prepare, carted];
        setPrepare(newPrepare);
    }
    
    return (
        <div className="lg:w-1/3">
            <div>
                <h2 className="text-2xl text-center">Want to cook: {cart.length}</h2>
                <hr />
                <h3 className='grid grid-cols-5 lg:flex gap-11 mt-5 text-center'>
                    <p>Sl</p>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </h3>
                <hr className='mb-2' />
                {
                    cart.map(cart => <Carted key={cart.recipe_id} carted={cart} handlePrepare={handlePrepare}></Carted>)
                }
            </div>
            <div className='mt-16'>
                <h2 className="text-2xl text-center">Currently cooking: {prepare.length}</h2>
                <hr />
                <h3 className='grid grid-cols-5 lg:flex lg:justify-evenly gap-11 mt-5'>
                    <p>Sl</p>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </h3>
                <hr className='mb-2' />
                {
                   prepare.map(prepare => <Prepare key={prepare.recipe_id} prepare={prepare}></Prepare>) 
                }
                
            </div>

            <Prepare prepare={prepare}></Prepare>    
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array
    
}

export default Cart;
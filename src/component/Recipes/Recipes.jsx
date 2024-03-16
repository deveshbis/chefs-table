import { useState } from "react";
import Recipe from "./Recipe/Recipe";
import Cart from "./Cart/Cart";



const Recipes = () => {

    const [cart, setCart] = useState([]);

    const handleAddCart = card => {
        const newCart = [...cart, card];
        setCart(newCart);
    }
    return (
        <div>
            <h1 className="text-5xl text-center mt-10">Our Recipes</h1>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>

            <div className='flex justify-between mt-5'>
            <Recipe handleAddCart={handleAddCart}></Recipe>
            <Cart cart={cart}></Cart>
          </div>
            
        </div>
    );
};

export default Recipes;
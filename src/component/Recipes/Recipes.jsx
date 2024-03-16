import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recipe from "./Recipe/Recipe";
import Cart from "./Cart/Cart";

const Recipes = () => {
    const [cart, setCart] = useState([]);

    const handleAddCart = (card) => {
        const isAlreadyInCart = cart.find((item) => item.recipe_id === card.recipe_id);

        if (isAlreadyInCart) {
            toast.warning("This recipe is already in the cart.");
            return;
        }
        const newCart = [...cart, card];
        setCart(newCart);
        toast.success("Recipe added to cart successfully!");
    };

    return (
        <div>
            <h1 className="text-5xl text-center mt-10">Our Recipes</h1>
            <p className="mt-3 text-center">Discover a world of flavors with Our Recipes, where each dish tells a story of passion and taste, inviting you to savor every moment.</p>

            <div className="flex justify-between mt-5">
                <Recipe handleAddCart={handleAddCart}></Recipe>
                <Cart cart={cart}></Cart>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;

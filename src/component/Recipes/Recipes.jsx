
import "react-toastify/dist/ReactToastify.css";

import Updated from "../Updated/Updated";

const Recipes = () => {


    return (
        <div>
            <h1 className="text-4xl text-center mt-10 font-bold mb-5">Our Recipes</h1>
            <p className="mt-3 text-center mb-10">Discover a world of flavors with Our Recipes, where each dish tells a story of passion and taste, inviting you to savor every moment. <br />Our recipes savory, sweet, spicy, tangy, creamy, crispy, tender, aromatic, rich, or refreshing. </p>
            <Updated></Updated>
        </div>
    );
};

export default Recipes;

// import { AiOutlineFieldTime, AiOutlineFire } from "react-icons/ai";

import { useEffect, useState } from "react";

const Recipe = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2 className="text-2xl">Recipes No: {recipe.length}</h2>
            
        </div>
    );
};

export default Recipe;
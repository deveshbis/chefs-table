// import { AiOutlineFieldTime, AiOutlineFire } from "react-icons/ai";

import { useEffect, useState } from "react";
import Card from "../Card/Card";

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
            <div className=" grid lg:grid-cols-2 gap-4 mt-5">
                {
                    recipe.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>


        </div>
    );
};

export default Recipe;
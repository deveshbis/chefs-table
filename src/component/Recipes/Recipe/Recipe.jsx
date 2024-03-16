

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Recipe = ({handleAddCart}) => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2 className="text-2xl">Recipes No: {recipe.length}</h2>
            <div className=" grid lg:grid-cols-2 lg:gap-4 mt-5">
                {
                    recipe.map(card => <Card key={card.id} card={card} handleAddCart={handleAddCart}></Card>)
                }
            </div>


        </div>
    );
};

Recipe.propTypes = {
    handleAddCart: PropTypes.func
}

export default Recipe;
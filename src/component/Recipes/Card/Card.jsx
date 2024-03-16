import { AiOutlineFieldTime, AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';

const Card = ({ card, handleAddCart }) => {

    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = card
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr className="p-3" />
                    <div className="p-3">
                        <h3 className="text-xl mb-3">Ingredients: {ingredients.length}</h3>
                        <ol>
                            {
                                ingredients.map((ingredient, idx) => <li key={idx}>. {ingredient}</li>)
                            }
                        </ol>
                    </div>
                    <hr className="p-3" />
                    <div className="flex justify-between">
                        <h4 className="flex items-center gap-2"><AiOutlineFieldTime></AiOutlineFieldTime> {preparing_time}</h4>
                        <h4 className="flex items-center gap-2"><AiOutlineFire></AiOutlineFire>{calories}</h4>
                    </div>
                    <div className="card-actions mt-5">
                        <button className="btn btn-primary" onClick={()=> handleAddCart(card)}>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddCart: PropTypes.func
}

export default Card;
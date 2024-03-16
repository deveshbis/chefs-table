import { AiOutlineFieldTime, AiOutlineFire } from "react-icons/ai";

const Recipe = () => {
    return (
        <div className="w-2/3">
            <h2 className="text-2xl">Recipes No:</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <hr className="p-3"/>
                            <div className="p-3">
                                <h3 className="text-xl mb-3">Ingredients: 6</h3>
                                <ul>
                                    <li>500g ground beef</li>
                                    <li>1 onion, chopped</li>
                                    <li>2 cloves garlic, minced</li>
                                </ul>
                            </div>
                            <hr className="p-3"/>
                            <div className="flex justify-between">
                                <h4 className="flex items-center gap-2"><AiOutlineFieldTime></AiOutlineFieldTime> 30 minutes</h4>
                                <h4 className="flex items-center gap-2"><AiOutlineFire></AiOutlineFire>600 calories</h4>
                            </div>
                            <div className="card-actions mt-5">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Recipe;
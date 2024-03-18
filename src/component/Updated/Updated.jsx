import { useEffect, useState } from "react";
import { AiOutlineFieldTime, AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Updated = ({ handleAddCart }) => {
    const [reciname, setReciname] = useState([]);
    const [countValue, setCountValue] = useState(0);
    const [countTable, setCountTable] = useState([]);
    const [cookingValue, setCookingValue] = useState(0);
    const [cookingTable, setCookingTable] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    



    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setReciname(data))
    }, []);



    const addToCountTable = (recipe) => {
        const isRecipeAlreadyAdded = countTable.find(item => item.recipe_name === recipe.recipe_name);
        if (isRecipeAlreadyAdded) {
            toast.warning('Recipe already added to cart!');
            return;
        }
    
        setCountTable([...countTable, recipe]);
        setCountValue(countValue + 1);
        handleAddCart(recipe);
        toast.success('Recipe added to cart!'); 
    };
    

    const removeFromCountTable = (recipe) => {
        const updatedCountTable = countTable.filter(item => item.recipe_name !== recipe.recipe_name);
        setCountTable(updatedCountTable);
        setCountValue(countValue - 1);
    };

    const addToCookingTable = (recipe) => {
        setCookingTable([...cookingTable, recipe]);
        setCookingValue(cookingValue + 1);
    };

    const handlePrepare = (recipe) => {
        removeFromCountTable(recipe);
        addToCookingTable(recipe);
    };

    useEffect(() => {
        let totalTimeSum = 0;
        let totalCaloriesSum = 0;

        cookingTable.forEach((recipe) => {
            totalTimeSum += recipe.preparing_time;
            totalCaloriesSum += recipe.calories;
        });

        setTotalTime(totalTimeSum);
        setTotalCalories(totalCaloriesSum);
    }, [cookingTable]);

    

    return (
        <div>
            <div className="lg:flex lg:justify-between ">
                <div className="lg:w-2/3">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                        {reciname.map((recipe, index) => (
                            <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl lg:p-6 border-solid border-2 border-gray-400 mt-3 p-2">
                                <figure><img src={recipe.recipe_image} alt={recipe.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{recipe.recipe_name}</h2>
                                    <p>{recipe.short_description}</p>
                                    <div className="space-y-3">
                                        <h3 className="text-xl mb-3">Ingredients: {recipe.ingredients.length}</h3>
                                        <ol>
                                            {recipe.ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
                                        </ol>
                                    </div>
                                    <hr className="" />
                                    <div className="flex justify-between space-y-3">
                                        <h4 className="flex items-center gap-2"><AiOutlineFieldTime /> {recipe.preparing_time}</h4>
                                        <h4 className="flex items-center gap-2"><AiOutlineFire /> {recipe.calories}</h4>
                                    </div>
                                    <div className="card-actions  ">
                                        <button className="btn bg-green-500 rounded-[50px]" onClick={() => addToCountTable(recipe)}>Want to Cook</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/3 border-solid border-2 border-gray-400 rounded-xl lg:p-2 mt-5 mb-5">
                    <div className="">
                        <h2 className="text-2xl text-center font-bold divide-x-2">Want to cook: {countValue}</h2>
                        <hr className="mt-5" />
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calorie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countTable.map((recipe, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{recipe.recipe_name}</td>
                                            <td>{recipe.preparing_time}</td>
                                            <td>{recipe.calories}</td>
                                            <td><button className="bg-green-500 p-2 rounded-[50px] text-[16px] font-medium" onClick={() => handlePrepare(recipe)}>Prepare</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl text-center font-bold divide-x-2">Currently cooking: {cookingValue}</h2>
                        <hr className="mt-5" />
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calorie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cookingTable.map((recipe, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{recipe.recipe_name}</td>
                                            <td>{recipe.preparing_time}</td>
                                            <td>{recipe.calories}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-center gap-20">
                        <h4>Total Time: {totalTime}</h4>
                        <h4>Total Calories: {totalCalories}</h4>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

Updated.propTypes = {
    handleAddCart: PropTypes.func
};

export default Updated;




import { useState } from 'react';
import PropTypes from 'prop-types';

const Carted = ({ carted, handlePrepare }) => {
    const { recipe_name, preparing_time, calories } = carted;

    const [isVisible, setIsVisible] = useState(true);

    const handlePreparingBtn= () => {
        setIsVisible(false);
    };

    return (
        <div>
            {isVisible && (
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr className="bg-base-200">
                                <th></th>
                                <td>{recipe_name}</td>
                                <td>{preparing_time}</td>
                                <td>{calories}</td>
                                <td>
                                    <button className="bg-green-400 p-2 rounded-3xl" onClick={()=> {handlePreparingBtn(carted); handlePrepare(carted);}}>
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

Carted.propTypes = {
    carted: PropTypes.object.isRequired,
    handlePrepare:PropTypes.func
};

export default Carted;

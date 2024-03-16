
import PropTypes from 'prop-types'

const Carted = ({carted}) => {
    const {recipe_name, preparing_time, calories} = carted;
    return (
        <div>
            

            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr className="bg-base-200">
                            <th></th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <td><button className="bg-green-400 p-2 rounded-3xl r">Preparing</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Carted.propTypes ={
    carted: PropTypes.object
}

export default Carted;
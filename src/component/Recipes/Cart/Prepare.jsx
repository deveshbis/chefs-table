import PropTypes from 'prop-types'

const Prepare = ({ prepare }) => {

    const {recipe_name, preparing_time, calories } = prepare;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr className="bg-base-200">
                            <th></th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

Prepare.propTypes = {
    prepare: PropTypes.object

}

export default Prepare;
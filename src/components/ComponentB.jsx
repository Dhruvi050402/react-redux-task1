
import { useDispatch } from 'react-redux';
import { setValue } from '../redux/store';

function ComponentB() {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setValue(event.target.value));
    };

    return (
        <div>
            <h3>Component B</h3>

            <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
            />
        </div>
    );
}

export default ComponentB;

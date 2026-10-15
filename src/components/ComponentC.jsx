
import { useSelector } from 'react-redux';

function ComponentC() {
    const value = useSelector((state) => state.value.text);

    return (
        <div>
            <h3>Component C</h3>

            <p>Entered Value: {value}</p>
        </div>
    );
}

export default ComponentC;

import React, { useContext } from 'react';
import { countContext } from '../App';

const GrandChild = () => {
    const contValue = useContext(countContext)
    return (
        <div>
            <h5>grand child component {contValue}</h5>
        </div>
    );
};

export default GrandChild;
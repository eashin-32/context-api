import React, { useState } from 'react';

const Chart = (props) => {
    const {count} = props;
    const {setCount} = props;
    return (
        <div>
            <h1>this is chart component: {count}</h1>
            <button onClick={() => setCount(count + 1)}>increment +</button>
        </div>
    );
};

export default Chart;
import React, { useContext } from 'react';
import { countContext } from '../App';
import GrandChild from './GrandChild';


const Header = () => {
    const count = useContext(countContext)
    return (
        <div>
            <h1>this is header component: {count}</h1>
            <GrandChild />
        </div>
    );
};

export default Header;
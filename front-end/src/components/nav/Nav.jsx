import React, { useState } from 'react';
import Home from '../home/home';

const Main = () => {
    const [page, setPage] = useState('');

    const handleClick = e => {
        const { value } = e.currentTarget;
        setPage(value);
    }
    
    return(
    <>
    <div className='Nav'>
        <ul>
            <li>
                <button onClick={handleClick} value="home"></button>
            </li>
        </ul>
        </div>
        {page === 'home' ? <Home /> : null}
    </>
    )
}


export default Main;
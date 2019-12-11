import React, { useState } from 'react';
import ActiveMembers from './ActiveMembers';
import InactiveMembers from './InactiveMembers';


const Members = () => {
    const [members, setMembers] = useState('active');

    const handleClick = e => {
        // console.log(e.currentTarget)
        const { value } = e.target;
        setMembers(value);
    }
    
    return(
    <>
    <div className='Members'>
        <ul>
            <li>
                <button onClick={handleClick} value="active">Active</button>
            </li>
            <li>
                <button onClick={handleClick} value="inactive">Inactive</button>
            </li>
        </ul>
        </div>
        {members === 'active' ? <ActiveMembers /> : null}
        {members === 'inactive' ? <InactiveMembers /> : null}
    </>
    )
}


export default Members;
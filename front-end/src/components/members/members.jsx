import React, { useState } from 'react';
import ActiveMembers from './ActiveMembers';
import InactiveMembers from './InactiveMembers';
import AddMember from './AddMember';


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
            <li>
            <button onClick={handleClick} value="addmember">Add Member</button>
            </li>
        </ul>
        </div>
        {members === 'active' ? <ActiveMembers /> : null}
        {members === 'inactive' ? <InactiveMembers /> : null}
        {members === 'addmember' ? <AddMember /> : null}
    </>
    )
}


export default Members;
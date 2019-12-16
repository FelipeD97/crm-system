import React, { useState } from 'react';
import ActiveMembers from './ActiveMembers';
import InactiveMembers from './InactiveMembers';
import AddMember from './AddMember';
import {Button} from '@material-ui/core'
import {ButtonGroup, Typography} from '@material-ui/core'





const Members = () => {
    const [members, setMembers] = useState('active');

    const handleClick = e => {
        // console.log(e.currentTarget)
        const { value } = e.currentTarget;
        console.log(e.currentTarget, "clicked")
        setMembers(value);
    }
    
    return(
    <>
    <div className='Members'>
        <ButtonGroup orientation="horozontal" color="primary" aria-label="vertical outlined primary button group">
            <Button variant='contained' color='primary' onClick={handleClick} value="active">Active</Button>
           
            <Button variant='contained' color='primary' onClick={handleClick} value="inactive">Inactive</Button>
          
            <Button variant='contained' color='primary' onClick={handleClick} value="addmember">Add Member</Button>
        </ButtonGroup>      

           </div>
        {members === 'active' ? <ActiveMembers /> : null}
        {members === 'inactive' ? <InactiveMembers /> : null}
        {members === 'addmember' ? <AddMember /> : null}
    </>
    )
}


export default Members;
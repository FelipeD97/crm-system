import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MemberProfile extends Component {
    state = {
        members: [],
    }

    async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/member`
            ); 
            const members = data;

        this.setState({
            members
        })
        }

        // onClick = e => {
        //     e.preventDeafult();
        //     <Route path='/test' />
        // }

    render() { 
        const { members } = this.state;
        const handle = parseInt(this.props.match.params.memberid);

        return ( 

        <div>
            <h1>Member Profile</h1>
                {members.map(m => m.id === handle  ?
                    <ul key={m.id} value={m.id} name={m.id}>
                        <li><b>Name:</b> {m.member_name}</li>
                        <li><b>Email:</b> {m.member_email}</li>
                        <li><b>Phone:</b> {m.phone}</li>
                        <li><b>Status</b> {m.status}</li>
                        <Link to={`/editMember/${m.id}`}><button>Edit</button></Link>
                    </ul>
                : null)}
        </div> 
        );
    }
}
 
export default MemberProfile;
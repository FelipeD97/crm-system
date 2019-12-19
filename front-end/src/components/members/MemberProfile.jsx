import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from "moment";
import { Button } from "@material-ui/core"
import Avatar from '../../images/boy.svg';

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

        <div className="MemberProfile">
            <h1>Member Profile</h1>
            <img src={Avatar}></img>
                {members.map(m => m.id === handle  ?
                    <ul key={m.id} value={m.id} name={m.id}>
                        <li><b>Name:</b> {m.member_name}</li>
                        <li><b>Email:</b> {m.member_email}</li>
                        <li><b>Phone:</b> {m.phone}</li>
                        <li><b>Date Joined:</b> {moment(m.date_joined).format("dddd, MMMM Do, YYYY")}</li>
                        <li><b>Status</b> {m.status}</li>
                        <Link to={`/editMember/${m.id}`}><Button variant='contained' color='secondary'>Edit</Button></Link>
                    </ul>
                : null)}
        </div> 
        );
    }
}
 
export default MemberProfile;
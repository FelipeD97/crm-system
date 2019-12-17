import React, { Component } from 'react';
import loadData from '../../utils/loadData';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


class EditMember extends Component {
    state = {
        members: [],
        id: this.props.match.params.memberid,
        member_name: '',
        phone: '',
        status: '',
        referrer: null
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

        editMember = async edit => {
            const response = await fetch(`http://localhost:3333/member/updateMember`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(edit)
            });
            const reply = await response;
            if (reply.status === 200) {
              alert("Member Updated!");
            }
            if (reply.status !== 200) {
              alert("Failed Update");
            }
          };
        
          handleSubmit = e => {
            e.preventDefault();
            const { id, member_name, phone, status } = this.state;
            const edit = {id, member_name, phone, status}

            this.editMember(edit)
            this.setState({referrer: '/members'})
          };
    
          handleChange = e => {
            const { name, value } = e.target;
            console.log(this.state);
        
            this.setState({
              [name]: value
            });
          };

    render() { 
        const { members, member_name, phone, status, referrer } = this.state;
        const handle = parseInt(this.props.match.params.memberid);
        if (referrer) return <Redirect to={referrer} />;
        console.log(this.props);

        return ( 
        <>
        <div>
            <h1>Edit Profile</h1>
                <form className="theForm" id="theForm">
                {members.map(m => m.id === handle  ?
                    <ul key={m.id} value={m.id} name={m.id}>
                        <label>
                            Name
                            <input name="member_name"type="text" value={member_name} placeholder={m.member_name} onChange={this.handleChange} />
                        </label>
                        <label>
                            Phone Number
                            <input name="phone"type="tel" value={phone} placeholder={m.phone} onChange={this.handleChange} />
                        </label>
                        <label>
                            Status
                            <input name="status"type="text" value={status} placeholder={m.status} onChange={this.handleChange} />
                        </label>
                    <button onClick={this.handleSubmit} id="submitButton">Update Now</button>
                    </ul>
                : null)}
                </form>
        </div> 
        </>
        );
    }
}
 
export default EditMember;
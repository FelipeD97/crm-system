import React, { useState } from "react";

function SignUp() {

    const [name,setName] = useState("");

    return (
        <div>
            <form onSubmit={setName}>
                <label>
                    Name: 
                    <input
                    type="text"
                    placeholder="name"
                    name={name}
                    />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default SignUp

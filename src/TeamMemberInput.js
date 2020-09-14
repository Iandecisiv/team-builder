// Write your Character component here
import React, { useState, useEffect } from "react";



const TeamMemberInput = props => {
    const [data, setData] = useState(props);
    const [teamMember, setTeamMember] = useState({name: "default", email: "default", role: "default"});

const changeHandler = (event) =>{
        setTeamMember({...teamMember,
            [event.target.name]: event.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addTeamMember(teamMember);
        setTeamMember({
            name: "",
            email: "",
            role: ""
        });
    }

    return (
       <div>
       <form onSubmit={submitForm}>
           <label>
               Name:
           <input type="text" name="name" value={teamMember.name} onChange={changeHandler} />

           </label>
<label>
               Email:
           <input type="text" name="email" value={teamMember.email} onChange={changeHandler} />

           </label>
<label>
               Role:
           <input type="text" name="role" value={teamMember.role} onChange={changeHandler} />

           </label>

        <button type="submit" >Add new Member</button>

       </form>
       </div> 
      );
}

export default TeamMemberInput;
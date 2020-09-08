// Write your Character component here
import React, { useState, useEffect } from "react";


const TeamMember = props => {
    const [data, setData] = useState(props);

    return (
        <>
        
            <h1>Name: {props.name}</h1>
            <h1>email: {props.email}</h1>
            <h1>Role: {props.role}</h1>
     <br/> 
      </>
      );
}

export default TeamMember;
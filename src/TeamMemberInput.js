// Write your Character component here
import React, { useState, useEffect } from "react";


const TeamMemberInput = props => {
    const [data, setData] = useState(props);

    return (
       <div>
           <button onClick={props.addTeamMember}>test</button>
       </div> 
      );
}

export default TeamMemberInput;
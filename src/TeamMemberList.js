import React, { useState, useEffect } from "react";
import TeamMember from './TeamMember';


const TeamMemberList = props => {

    return (
    <div>
        {
            props.teamListState.map(
                function(teamMember, index){
                    return <TeamMember key={index} name={teamMember.name}  email={teamMember.email} role={teamMember.role}/>
                }
            )
        }
    </div>

      );
}

export default TeamMemberList;
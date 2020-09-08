import React, { useState } from 'react';
import './App.css';
import TeamMember from './TeamMember';
import TeamMemberInput from './TeamMemberInput';

const teamList = [
  {name: 'james morrisey', email: 'kid@demsey.com', role: 'sheild agent'},
  {name: 'kane able', email: 'jimmy@demsey.com', role: 'hydra operative'},
  {name: 'james dean', email: 'concious@demsey.com', role: 'actually a dolphin'},
]

function App() {
  const [teamListState, setTeamListState] = useState(teamList);

  const updateList = () => {
    var teamListPlaceHolder = teamList;
    teamListPlaceHolder.push({name:'kid', email: 'kiddo', role: 'kiddo 2'})
    setTeamListState(teamListPlaceHolder);
    console.log(teamListState);
          };
          

  return (
    <div className="App">
     {
     teamListState.map(function(teamMember, index){
       return <TeamMember key={index} name={teamMember.name} email={teamMember.email} role={teamMember.role}/>
     }
      )
}

      <TeamMemberInput addTeamMember={updateList}/>
    </div>
  );
}

export default App;

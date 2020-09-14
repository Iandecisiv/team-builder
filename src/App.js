import React, { useState } from 'react';
import './App.css';
import TeamMember from './TeamMember';
import TeamMemberList from './TeamMemberList';
import TeamMemberInput from './TeamMemberInput';

const teamList = [
  {name: 'james morrisey', email: 'kid@demsey.com', role: 'sheild agent'},
  {name: 'kane able', email: 'jimmy@demsey.com', role: 'hydra operative'},
  {name: 'james dean', email: 'concious@demsey.com', role: 'actually a dolphin'},
]

function App() {
  const [teamListState, setTeamListState] = useState(teamList);

  const updateList = (formData) => {
    const newTeamMember = {
      name: formData.name,
      email: formData.email,
      role: formData.role
    };
     setTeamListState([...teamListState, newTeamMember]);
          };
          

  return (
    <div className="App">
      <TeamMemberList teamListState={teamListState} />

       <TeamMemberInput addTeamMember={updateList}/>
    </div>
  );
}

export default App;

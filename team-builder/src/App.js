import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import TeamMembers from './component/TeamMembers';

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Alanna Mathieu',
      email: 'alanna@gmail.com',
      role: 'Software Engineer'
    }
  ]);

  const addNewTeam = (formData) => {
    const newTeam = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      textarea: formData.textarea
    };
    setTeam([...team, newTeam])
  }
  
  return (
    <div className="App">
      <h1>Employee of the Month</h1>
      <Form addNewTeam={addNewTeam} />
      <TeamMembers teams={team}/>
    </div>
  );
}

export default App;

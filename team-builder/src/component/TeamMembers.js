import React, { useState } from 'react';

function TeamMembers() {
    const [team, setTeam] = useState('Alanna');
  return (
    <div>
        <p>{team}</p>
    </div>
  );
}

export default TeamMembers;
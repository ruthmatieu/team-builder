import React from 'react';

const TeamMembers = (props) => {
  console.log("Team props: ", props);

  return (
    <div>
      {props.teams.map((team) => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamMembers;
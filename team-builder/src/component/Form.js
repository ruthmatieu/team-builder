import React, { useState } from 'react';

function Form(props) {
    console.log("TeamForm props: ", props);

    const [team, setTeam] = useState({
        name: "Alanna",
        email: "alanna@gmail.com",
        role: "sr. software engineer"
    });

    const changeHandler = (e) => {
        console.log(e.target.value);
        console.log("team: ", team);
        setTeam({
        // spread operator
        // e.target :)
        ...team,
        [e.target.name]: e.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({ name: "", email: "", role: "" });
    };

  return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            value={team.name}
            onChange={changeHandler}
        />
        <label htmlFor="email">E-mail</label>
        <input
            type="text"
            name="email"
            value={team.email}
            onChange={changeHandler}
        />
        <label htmlFor="role">Position</label>
        <input
            type="text"
            name="role"
            value={team.role}
            onChange={changeHandler}
        />

        <button type="submit">Add New Teammate</button>
    </form>
  );
}

export default Form;
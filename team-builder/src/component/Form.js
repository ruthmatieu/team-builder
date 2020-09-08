import React, { useState } from 'react';

function Form(props) {

    // console.log("TeamForm props: ", props);

    const [team, setTeam] = useState({
        name: '',
        email: '',
        role: '',
    });

    const changeHandler = event => {
        // console.log(e.target.value);
        // console.log("team: ", team);
        setTeam({
        ...team,
        [event.target.name]: event.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({ name: "", email: "", role: "" });
    };

  return (
    <form onSubmit={submitForm}>

        <div className="form-info">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={team.name}
                onChange={changeHandler}
            />
        </div>

        <div className="form-info">
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                name="email"
                value={team.email}
                onChange={changeHandler}
            />
        </div>

        <div className="form-info">
            <label htmlFor="role">Position</label>
            <input
                type="text"
                name="role"
                value={team.role}
                onChange={changeHandler}
            />
        </div>


        <button type="submit">Add Employee</button>
    </form>
  );
}

export default Form;
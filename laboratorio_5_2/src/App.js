import React, { useState } from "react";

const App = () => {
  var [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  var [newName, setNewName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNewName((newName = e.target.value));
  };

  const addPerson = () => {
    setPersons(persons.concat([{ name: newName }]));
  };

  const listPersons = persons.map((person) => (
    <p key={person.name}>{person.name}</p>
  ));

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input type="text" onChange={handleChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {listPersons}
    </div>
  );
};

export default App;

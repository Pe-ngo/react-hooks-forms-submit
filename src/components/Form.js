import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [age, setAge] = useState(20)
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleAgeChange(event){
    setAge(event.target.value);
  }


  function handleSubmit(event){
    event.preventDefault();
    if (firstName.length > 0){
      const formData = {firstName:firstName,lastName:lastName,age:age};
      const dataArray = [...submittedData,formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setAge("");
      setErrors([]);
    }
    else{
      setErrors(["First Name is required!"])
    }
    
  }

  const listOfSubmissions = submittedData.map((data, index) =>{
    return(
      <div key={index}>
        {data.firstName} {data.lastName} {data.age}
      </div>
    )
  })

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input type="number" onChange = {handleAgeChange} value = {age} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0 
    ? errors.map((error, index)=>(
      <p key={index} style={{color:"red"}}>
        {error}
      </p>
    )):null}
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;

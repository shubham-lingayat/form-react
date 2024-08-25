import "./App.css";
import { React, useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function firstNameHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function lastNameHandler(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textData: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });

  function formDataHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        // i.e. [name]:value
        // update Name, jar type checjbox asel tar 'checked' input tag madhun ghya aani checked chi value update kara
        // nahitar inputt tag madhali 'value' update kara
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // console.log(formData);
  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("On Submitting the form Printing its data");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          onChange={formDataHandler}
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
        />
        <input
          onChange={formDataHandler}
          placeholder="Last Name "
          name="lastName"
          value={formData.lastName}
        />
        <input
          onChange={formDataHandler}
          placeholder="Email"
          name="email"
          value={formData.email}
        />
        <textarea
          onChange={formDataHandler}
          placeholder="Enter Comment"
          name="textData"
          value={formData.textData}
        />
        <input
          type="checkbox"
          onChange={formDataHandler}
          name="isVisible"
          id="isvisibleId"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisibleId">Check Term & Conditions</label>
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={formDataHandler}
            value="Online-Mode"
            id="online-mode"
            name="mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="online-mode">Online </label>
          <input
            type="radio"
            onChange={formDataHandler}
            value="Offline-Mode"
            id="offline-mode"
            name="mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="offline-mode">Offline </label>
        </fieldset>
        <select
          onChange={formDataHandler}
          value={formData.favCar}
          name="favCar"
          id="favCar"
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
        </select>
        {/* Submit Button */}
        {/* <input type="submit" value="Submit" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

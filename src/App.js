import "./App.css";
import { React, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Printing Form Data: ");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">FirstName</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="FirstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="lastName">LastName</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="LastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United State</option>
          <option>Canada</option>
          <option>Maxico</option>
        </select>

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />

        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="State"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />

        <label htmlFor="zip">Postal Code</label>
        <br />
        <input
          type="text"
          name="zip"
          id="zip"
          placeholder="Postal Code"
          value={formData.zip}
          onChange={changeHandler}
          className="outline"
        />

        {/* Check Box */}
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Form = () => {
  const optionValues = [
    "Development",
    "Management",
    "Graphic Design",
    "Marketing"
  ];
  const [buttonDisable, setButtonState] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState("");
  const [buttonText, setText] = useState("Sign Up Now \u25BA");
  const [formData, setData] = useState({
    email: "",
    position: ""
  });
  const { email, position } = formData;

  const onChange = e =>
    setData({ ...formData, [e.target.name]: e.target.value });

  function validateEmail(email) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors("");
      return true;
    }
    setErrors("Please enter a valid email address.");
    return false;
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
    } else {
      console.log("The email is: ", email);
      console.log("The position is: ", position);
      setText("Submitting...");
      setButtonState(true);
      setTimeout(() => {
        setSuccess(true);
      }, 2000);
    }
  }

  if (success) {
    return <Redirect to="/thankyou" />;
  }

  return (
    <div>
      <p className="paragraph">
        {" "}
        Prepare for your career with a Project Management, Web-Development,
        Graphic design, or Digital Marketing Internship at Northern.
      </p>
      <form>
        <div className="errors">{errors}</div>
        <div className="inputGroup">
          <input
            type="email"
            required
            placeholder="Your Email Address *"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            className="inputFont inputField"
          />
          <select
            name="position"
            value={position}
            onChange={e => onChange(e)}
            className="inputFont inputField"
          >
            <option className="inputFont" hidden>
              Your Interests
            </option>

            {optionValues.map(val => (
              <option className="inputFont" value={val} key={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="mySubmit"
          onClick={handleSubmit}
          disabled={buttonDisable}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;

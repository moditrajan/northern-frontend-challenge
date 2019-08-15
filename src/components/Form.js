import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <p className="paragraph">
        {" "}
        Prepare for your career with a a Project Management, Web-Development,
        Graphic design, or Digital Marketing Internship at Northern
      </p>
      <input type="text" className="inputFont" />
      <select defaultValue="Your Interests" className="inputFont">
        {/* <option className="inputFont" value="" disabled selected>
          Your Interests
        </option> */}
        <option className="inputFont" value="Project Management">
          Project Management
        </option>
        <option className="inputFont" value="Development,">
          Development,
        </option>
        <option className="inputFont" value="Graphic design,">
          Graphic Design,
        </option>
        <option className="inputFont" value="Marketing">
          Marketing
        </option>
      </select>
    </Fragment>
  );
};

export default Form;

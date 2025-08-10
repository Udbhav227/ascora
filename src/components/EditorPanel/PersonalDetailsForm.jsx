import React from "react";

const PersonalDetailsForm = ({ personalDetails, setPersonalDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  return (
    <form>
      <h1 className="form-header">Personal info</h1>
      <div className="inputs-container">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              value={personalDetails.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>
        <div className="input-group">
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={personalDetails.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={personalDetails.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
        </div>

        <div className="input-group">
          <div>
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              id="linkedin"
              name="linkedin"
              value={personalDetails.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn profile URL"
            />
          </div>
          <div>
            <label htmlFor="github">GitHub</label>
            <input
              id="github"
              name="github"
              value={personalDetails.github}
              onChange={handleChange}
              placeholder="GitHub profile URL"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;

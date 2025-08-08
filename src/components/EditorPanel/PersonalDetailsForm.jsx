import React, { useState } from "react";

const PersonalDetailsForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email, linkedin, github });
  };

  return (
    <>
      <form className="personal-details input-section" onSubmit={handleSubmit}>
        <h1 className="section-header">Personal info</h1>
        <div className="items-wrapper">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required="on"
            />
          </div>

          <div className="item-group">
            <div>
              <label>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                required="on"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div>
            <label>LinkedIn</label>
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="https://linkedin.com/in/example"
            />
          </div>

          <div>
            <label>GitHub</label>
            <input
              type="url"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              placeholder="https://github.com/example"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalDetailsForm;

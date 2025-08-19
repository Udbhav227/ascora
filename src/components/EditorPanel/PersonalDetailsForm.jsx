import React, { useState } from "react";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const PersonalDetailsForm = ({ personal, onDetailsChange }) => {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Full name is required.";
        break;
      case "phone":
        if (value.trim()) {
          const phoneNumber = parsePhoneNumberFromString(value);
          if (!phoneNumber || !phoneNumber.isValid()) {
            error = "Please enter a valid international phone number.";
          }
        } else {
          error = "Phone number is required."
        }
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email format.";
        break;
      case "linkedin":
      case "github":
        if (value.trim() && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(value)) {
          error = "Please enter a valid URL.";
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = {
      ...personal,
      [name]: value,
    };
    onDetailsChange(updatedDetails);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  return (<div>
    
      <form noValidate onBlur={handleBlur}>
        <h2 className="form-header">Personal Info</h2>
        <div className="inputs-container">
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              className={errors.name ? "error" : ""}
              value={personal.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="input-group">
            <div className="input-wrapper">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={errors.phone ? "error" : ""}
                value={personal.phone}
                onChange={handleChange}
                placeholder="e.g., +91 9876543210"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={errors.email ? "error" : ""}
                value={personal.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="input-group">
            <div className="input-wrapper">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                className={errors.linkedin ? "error" : ""}
                value={personal.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn profile URL"
              />
              {errors.linkedin && <span className="error">{errors.linkedin}</span>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="github">GitHub</label>
              <input
                id="github"
                name="github"
                type="url"
                className={errors.github ? "error" : ""}
                value={personal.github}
                onChange={handleChange}
                placeholder="GitHub profile URL"
              />
              {errors.github && <span className="error">{errors.github}</span>}
            </div>
          </div>
        </div>
      </form>
        <hr className="section-separator" />
  </div>
  );
};

export default PersonalDetailsForm
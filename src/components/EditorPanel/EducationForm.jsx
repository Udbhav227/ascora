import React from 'react';

const EducationForm = ({ edu, onDetailsChange }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = edu.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    onDetailsChange(updatedEducation);
  };

  const handleAddEducation = () => {
    const newEducationEntry = {
      institution: "",
      degree: "",
      cgpa: "",
      location: "",
      startDate: "",
      endDate: "",
    };
    onDetailsChange([...edu, newEducationEntry]);
  };

  const handleDeleteEducation = (index) => {
    const filteredEducation = edu.filter((_, i) => i !== index);
    onDetailsChange(filteredEducation);
  };

  return (
    <form>
      {edu.map((eduItem, index) => (
        <React.Fragment key={index}>
          {index > 0 && <hr className="section-separator" />}
          
          <div className="inputs-container">
            <div className="section-header">
              <h3>Education {index + 1}</h3>
              {edu.length > 1 && (
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleDeleteEducation(index)}
                >
                  Delete
                </button>
              )}
            </div>

            <div className="input-wrapper">
              <label>Institution</label>
              <input
                type="text"
                name="institution"
                value={eduItem.institution}
                onChange={(e) => handleChange(e, index)}
                placeholder="e.g., Southwestern University"
              />
            </div>
            <div className="input-wrapper">
              <label>Degree</label>
              <input
                type="text"
                name="degree"
                value={eduItem.degree}
                onChange={(e) => handleChange(e, index)}
                placeholder="e.g., Bachelor of Arts in Computer Science"
              />
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <label>CGPA</label>
                <input
                  type="number"
                  name="cgpa"
                  value={eduItem.cgpa}
                  onChange={(e) => handleChange(e, index)}
                  step="0.01"
                  min="0"
                  max="10"
                  placeholder="e.g., 3.81 or 9.26"
                />
              </div>
              <div className="input-wrapper">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={eduItem.location}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="e.g., Georgetown, TX"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <label>Start Date</label>
                <input
                  type="month"
                  name="startDate"
                  value={eduItem.startDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="input-wrapper">
                <label>End Date</label>
                <input
                  type="month"
                  name="endDate"
                  value={eduItem.endDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="button-container">
        <button type="button" className="add-button" onClick={handleAddEducation}>
          Add Education
        </button>
      </div>
    </form>
  );
};

export default EducationForm;
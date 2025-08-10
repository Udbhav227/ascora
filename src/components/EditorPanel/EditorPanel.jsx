import PersonalDetailsForm from "./PersonalDetailsForm";
// import EducationForm from "./EducationForm";
// import ExperienceForm from "./ExperienceForm";
// import ProjectsForm from "./ProjectsForm";
// import CertificatesForm from "./CertificatesForm";

import "../../styles/EditorPanel.css";

const EditorPanel = ({ profile, setProfile }) => {
  // This specific handler knows how to update the 'contact' part of the profile
  const handleContactChange = (updatedContactDetails) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      contact: updatedContactDetails,
    }));
  };  

  return (
    <div className="editor-panel">
      <PersonalDetailsForm
        personalDetails={profile.contact}
        onDetailsChange={handleContactChange} // Pass the specific handler
      />
      {/* Other forms for education, experience, etc. would go here */}
    </div>
  );
};

export default EditorPanel;

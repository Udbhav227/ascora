import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";
// import ExperienceForm from "./ExperienceForm";
// import ProjectsForm from "./ProjectsForm";
// import CertificatesForm from "./CertificatesForm";

import "../../styles/EditorPanel.css";

const EditorPanel = ({ profile, setProfile }) => {
  const handleSectionChange = (sectionName, updatedData) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [sectionName]: updatedData,
    }));
  };

  return (
    <div className="editor-panel">
      <PersonalDetailsForm
        personal={profile.contact}
        onDetailsChange={(data) => handleSectionChange("contact", data)}
      />
      <EducationForm
        edu={profile.education}
        onDetailsChange={(data) => handleSectionChange("education", data)}
      />
      {/* <ExperienceForm
      personalDetails={profile.experience}
      onDetailsChange={(data) => handleSectionChange("experience", data)}
    /> */}
    </div>
  );
};

export default EditorPanel;

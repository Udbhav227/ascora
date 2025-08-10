import PersonalDetailsForm from "./PersonalDetailsForm";
// import EducationForm from "./EducationForm";
// import ExperienceForm from "./ExperienceForm";
// import ProjectsForm from "./ProjectsForm";
// import CertificatesForm from "./CertificatesForm";

import "../../styles/EditorPanel.css";

const EditorPanel = ({ profile, setProfile }) => {
  return (
    <div className="editor-panel">
      <PersonalDetailsForm
        personalDetails={profile.contact}
        setPersonalDetails={(updatedContact) =>
          setProfile((prev) => ({
            ...prev,
            contact: updatedContact,
          }))
        }
      />
    </div>
  );
};

export default EditorPanel;

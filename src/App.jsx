import React, { useState } from "react";

import EditorPanel from "./components/EditorPanel/EditorPanel";

const App = () => {
  const [profile, setProfile] = useState({
    contact: {
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    },
    education: [],
    experience: [],
    projects: [],
    certificates: [],
    technical_skills: {
      languages: [],
      frameworks: [],
      developer_tools: [],
      libraries: [],
    },
    customSections: [],
  });

  return (
    <div className="app-container">
      <a className="app-header bold">Ascora</a>
      <div className="cv-builder-layout">
        <div className="editor-panel">
          <EditorPanel profile={profile} setProfile={setProfile} />
        </div>
      </div>
    </div>
  );
};

export default App;

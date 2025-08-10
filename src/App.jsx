import React, { useState } from "react";

import EditorPanel from "./components/EditorPanel/EditorPanel";
import PreviewPanel from "./components/PreviewPanel/PreviewPanel";

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
    <>
      <div className="app-container">
        <a href="#" className="app-header">Ascora</a>
        <div className="cv-builder-layout">
          <EditorPanel profile={profile} setProfile={setProfile} />
          <PreviewPanel profile={profile} />
        </div>
      </div>
    </>
  );
};

export default App;
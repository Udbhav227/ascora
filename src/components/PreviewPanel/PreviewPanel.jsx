import React from "react";

import "../../styles/PreviewPanel.css";

const PreviewPanel = ({ profile }) => {
  return (
    <div className="preview-panel">
      <div className="resume-preview">
        <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "0.5rem" }}>
          Live State Preview
        </h2>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PreviewPanel;

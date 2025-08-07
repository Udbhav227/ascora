import React from 'react';

import './PreviewPanel.css';

const PreviewPanel = () => {
  return (
    <div className="preview-panel">
      <h2>Preview Panel</h2>
      <div className="resume-preview">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> +91 1234567890</p>
      </div>
    </div>
  );
};

export default PreviewPanel;

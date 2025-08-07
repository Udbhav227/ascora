import React from 'react';

import './EditorPanel.css';

const EditorPanel = () => {
  return (
    <div className="editor-panel">
      <h2>Editor Panel</h2>
      <form>
        <label>
          Full Name:
          <input type="text" placeholder="John Doe" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="john@example.com" />
        </label>
        <label>
          Phone:
          <input type="text" placeholder="+91 1234567890" />
        </label>
        {/* Add more dummy inputs later */}
      </form>
    </div>
  );
};

export default EditorPanel;
import React from 'react';

import '../../styles/EditorPanel.css';
import PersonalDetailsForm from './PersonalDetailsForm';

const EditorPanel = () => {
  return (
    <div className="editor-panel">
      <PersonalDetailsForm></PersonalDetailsForm>
    </div>
  );
};

export default EditorPanel;
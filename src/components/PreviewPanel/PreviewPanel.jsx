import React from 'react';
import PersonalDetailsPreview from './PersonalDetailsPreview';

import '../../styles/PreviewPanel.css';


const PreviewPanel = ( {personalDetails} ) => {
  return (
    <div className="preview-panel">
      <div className="resume-preview">
        <PersonalDetailsPreview personalDetails={personalDetails}/>
      </div>
    </div>
  );
};

export default PreviewPanel;

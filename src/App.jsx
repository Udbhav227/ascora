import React, { useState } from 'react';

import EditorPanel from './components/EditorPanel/EditorPanel';
import PreviewPanel from './components/PreviewPanel/PreviewPanel';

import './styles/App.css';
import './styles/reset.css';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <div className="cv-builder-layout">
        <EditorPanel />
        <PreviewPanel />
      </div>
    </div>
  );
}

export default App;

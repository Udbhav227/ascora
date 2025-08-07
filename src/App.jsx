import React, { useState } from 'react';

import EditorPanel from './components/EditorPanel/EditorPanel';
import PreviewPanel from './components/PreviewPanel/PreviewPanel';

function App() {
  return (
    <div className="app-container">
      <a className="app-header bold">Ascora</a>
      <div className="cv-builder-layout">
        <EditorPanel />
        <PreviewPanel />
      </div>
    </div>
  );
}

export default App;

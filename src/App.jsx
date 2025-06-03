import { useState } from 'react';
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

export default function App() {

  return (
    <div>
      <h1>CV Application</h1>
      <General />
      <Education />
      <Experience />
    </div>
  )

}
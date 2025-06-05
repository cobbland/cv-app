import { useState } from 'react';
import General from './components/General.jsx';
import Bio from './components/Bio.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

export default function App() {
  const [educationNum, setEducationNum] = useState([]);
  const [experienceNum, setExperienceNum] = useState([]);

  function removeLastEducation() {
    let newEducation = educationNum;
    newEducation.pop();
    setEducationNum([...newEducation]);
  }

  function removeLastExperience() {
    let newExperience = experienceNum;
    newExperience.pop();
    setExperienceNum([...newExperience]);
  }

  return (
    <div>
      <h1>CV Application</h1>
      <h2 className='general'>General</h2>
      <General />
      <h2>Bio</h2>
      <Bio />
      <h2>Skills</h2>
      <Skills />
      <h2>Experience</h2>
      {experienceNum.map((num) => <Experience key={num} />)}
      <button onClick={() => setExperienceNum([...experienceNum, crypto.randomUUID()])}>Add New</button>
      <button onClick={removeLastExperience}>Delete Previous</button>
      <h2>Education</h2>
      {educationNum.map((num) => <Education key={num} />)}
      <button onClick={() => setEducationNum([...educationNum, crypto.randomUUID()])}>Add New</button>
      <button onClick={removeLastEducation}>Delete Previous</button>
    </div>
  )

}
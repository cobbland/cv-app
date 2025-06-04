import { useState } from 'react';
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

export default function App() {
  const [educationNum, setEducationNum] = useState([1]);
  const [experienceNum, setExperienceNum] = useState([1]);

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
      <h2>General</h2>
      <General />
      <h2>Education</h2>
      {educationNum.map(() => <Education />)}
      <button onClick={() => setEducationNum([...educationNum, 1])}>Add New</button>
      <button onClick={removeLastEducation}>Delete Previous</button>
      <h2>Experience</h2>
      {experienceNum.map(() => <Experience />)}
      <button onClick={() => setExperienceNum([...experienceNum, 1])}>Add New</button>
      <button onClick={removeLastExperience}>Delete Previous</button>
    </div>
  )

}
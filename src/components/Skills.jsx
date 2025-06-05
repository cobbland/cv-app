import { useState } from "react";

export default function Skills() {
    const [skills, setSkills] = useState('');
    const [edit, setEdit] = useState(true);

    if (edit) {
        return (
            <div>
                <textarea onChange={e => setSkills(e.target.value)} value={skills}/>
                <div>
                    <button onClick={() => setEdit(false)}>Save</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p className="skills">{skills}</p>
                <div>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>  
            </div>
        )
    }    
}
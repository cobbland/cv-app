import { useState } from "react";

export default function Skills({ saveAll }) {
    const [skills, setSkills] = useState('');

    if (saveAll) {
        return (
            <div>
                <textarea onChange={e => setSkills(e.target.value)} value={skills}/>
            </div>
        )
    } else {
        return (
            <div>
                <p className="skills">{skills}</p>
            </div>
        )
    }    
}
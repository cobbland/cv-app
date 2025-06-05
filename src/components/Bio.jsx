import { useState } from "react";

export default function Bio({ saveAll }) {
    const [bio, setBio] = useState('');

    if (saveAll) {
        return (
            <div>
                <textarea onChange={e => setBio(e.target.value)} value={bio}/>
            </div>
        )
    } else {
        return (
            <div>
                <p className="bio">{bio}</p> 
            </div>
        )
    }    
}
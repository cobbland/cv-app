import { useState } from "react";

export default function Bio({ saveAll }) {
    const [bio, setBio] = useState('');
    const [edit, setEdit] = useState(saveAll);

    if (edit && saveAll) {
        return (
            <div>
                <textarea onChange={e => setBio(e.target.value)} value={bio}/>
                <div>
                    <button onClick={() => setEdit(false)}>Save</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p className="bio">{bio}</p>
                <div>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>  
            </div>
        )
    }    
}
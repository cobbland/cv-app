import { useState } from "react";

export default function Education({ saveAll }) {
    const [school, setSchool] = useState('');
    const [area, setArea] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [edit, setEdit] = useState(saveAll);
    if (edit && saveAll) {
        return (
            <div>
                <h3>School</h3>
                <input type="text" onChange={e => setSchool(e.target.value)} value={school}/>
                <h3>Area</h3>
                <input type="text" onChange={e => setArea(e.target.value)} value={area}/>
                <h3>From</h3>
                <input type="date" onChange={e => setFrom(e.target.value)} value={from}/>
                <h3>To</h3>
                <input type="date" onChange={e => setTo(e.target.value)} value={to}/>
                <div>
                    <button onClick={() => setEdit(false)}>Save</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h3>School</h3>
                <p>{school}</p>
                <h3>Area</h3>
                <p>{area}</p>
                <h3>From</h3>
                <p>{from}</p>
                <h3>To</h3>
                <p>{to}</p>
                <div>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>
            </div>
        )
    }
}
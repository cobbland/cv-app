import { useState } from "react";

export default function Education() {
    const [school, setSchool] = useState('');
    const [area, setArea] = useState('');
    const [dates, setDates] = useState('');
    const [edit, setEdit] = useState(true);
    if (edit) {
        return (
            <div>
                <h3>School</h3>
                <input type="text" onChange={e => setSchool(e.target.value)} value={school}/>
                <h3>Area</h3>
                <input type="text" onChange={e => setArea(e.target.value)} value={area}/>
                <h3>Dates</h3>
                <input type="date-range" onChange={e => setDates(e.target.value)} value={dates}/>
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
                <h3>Dates</h3>
                <p>{dates}</p>
                <div>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>
            </div>
        )
    }
}
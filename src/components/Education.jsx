import { useState } from "react";

export default function Education({ saveAll }) {
    const [school, setSchool] = useState('');
    const [area, setArea] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    if (saveAll) {
        return (
            <div>
                <div>
                    <h3>School</h3>
                    <input type="text" onChange={e => setSchool(e.target.value)} value={school}/>
                </div>
                <div>
                    <h3>Area</h3>
                    <input type="text" onChange={e => setArea(e.target.value)} value={area}/>
                </div>
                <div>
                    <h3>From</h3>
                    <input type="date" onChange={e => setFrom(e.target.value)} value={from}/>
                </div>
                <div>
                    <h3>To</h3>
                    <input type="date" onChange={e => setTo(e.target.value)} value={to}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <h3>School</h3>
                    <p className="school">{school}</p>
                </div>
                <div>
                    <h3>Area</h3>
                    <p>{area}</p>
                </div>
                <div>
                    <h3>From</h3>
                    <p>{from}</p>
                </div>
                <div>
                    <h3>To</h3>
                    <p>{to}</p>
                </div>
            </div>
        )
    }
}
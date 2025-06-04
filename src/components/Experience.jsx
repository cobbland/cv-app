import { useState } from "react";

export default function Experience() {
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [dates, setDates] = useState('');
    const [edit, setEdit] = useState(true);
    if (edit) {
        return (
            <div>
                <h3>Company</h3>
                <input type="text" onChange={e => setCompany(e.target.value)} value={company}/>
                <h3>Title</h3>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
                <h3>Responsibilities</h3>
                <input type="text" onChange={e => setResponsibilities(e.target.value)} value={responsibilities}/>
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
                <h3>Company</h3>
                <p>{company}</p>
                <h3>Title</h3>
                <p>{title}</p>
                <h3>Responsibilities</h3>
                <p>{responsibilities}</p>
                <h3>Dates</h3>
                <p>{dates}</p>
                <div>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>
            </div>
        )
    }
}
import { useState } from "react";

export default function Experience({ saveAll }) {
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [edit, setEdit] = useState(saveAll);
    if (edit && saveAll) {
        return (
            <div>
                <h3>Company</h3>
                <input type="text" onChange={e => setCompany(e.target.value)} value={company}/>
                <h3>Title</h3>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
                <h3>Responsibilities</h3>
                <textarea onChange={e => setResponsibilities(e.target.value)} value={responsibilities}/>
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
                <h3>Company</h3>
                <p>{company}</p>
                <h3>Title</h3>
                <p>{title}</p>
                <h3>Responsibilities</h3>
                <p>{responsibilities}</p>
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
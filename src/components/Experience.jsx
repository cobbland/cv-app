import { useState } from "react";

export default function Experience({ saveAll }) {
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    if (saveAll) {
        return (
            <div>
                <div>
                    <h3>Company</h3>
                    <input type="text" onChange={e => setCompany(e.target.value)} value={company}/>
                </div>
                <div>
                    <h3>Title</h3>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <h3>Responsibilities</h3>
                    <textarea onChange={e => setResponsibilities(e.target.value)} value={responsibilities}/>
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
                    <h3>Company</h3>
                    <p className="company">{company}</p>
                </div>
                <div>
                    <h3>Title</h3>
                    <p>{title}</p>
                </div>
                <div>
                    <h3>Responsibilities</h3>
                    <p>{responsibilities}</p>
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
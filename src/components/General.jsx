import { useState } from "react";

export default function General() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [edit, setEdit] = useState(true);
    if (edit) {
        return (
            <div>
                <h3>Name</h3>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                <h3>Email</h3>
                <input type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                <h3>Phone</h3>
                <input type="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
                <div>
                    <button onClick={() => setEdit(false)}>Save</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Name</h3>
                <p>{name}</p>
                <h3>Email</h3>
                <p>{email}</p>
                <h3>Phone</h3>
                <p>{phone}</p>
                <div>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>
            </div>
        )
    }
}
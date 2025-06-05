import { useState } from "react";

export default function General({ saveAll }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    if (saveAll) {
        return (
            <>
                <div>
                    <h3>Name</h3>
                    <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <h3>Location</h3>
                    <input type="text" onChange={e => setLocation(e.target.value)} value={location}/>
                </div>
                <div>
                    <h3>Email</h3>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <h3>Phone</h3>
                    <input type="tel" onChange={e => setPhone(e.target.value)} value={phone}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <h3>Name</h3>
                    <p className="name">{name}</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p className="location">{location}</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p className="email">{email}</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p className="phone">{phone}</p>
                </div>
            </>
        )
    }
}
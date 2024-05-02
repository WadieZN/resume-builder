import React, { useState } from 'react';

export default function PersonalInfo({ onUpdate }) {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: '',
        profession: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
        onUpdate({ ...personalInfo, [name]: value });
    }
    
    return (
        <div id='personalInfo'>
            <h2>Personal Information</h2>
            <div>
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" id='fullName' name="fullName" value={personalInfo.fullName} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="profession">Profession: </label>
                <input type="text" id="profession" name="profession" value={personalInfo.profession} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" id='email' name="email" value={personalInfo.email} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone: </label>
                <input type="text" id='phone' name="phone" value={personalInfo.phone} onChange={handleInputChange} />
            </div>
        </div>
    );
}

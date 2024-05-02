import React, { useState } from 'react';

export default function About({ onUpdate }) {
    const [about, setAbout] = useState('');

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setAbout(newValue);
        onUpdate(newValue);
    }

    return (
        <div id='about'>
            <h2>About: </h2>
            <div className='about'>
                <textarea id={`aboutDescription`} name="aboutDescription" value={about} placeholder='Talk about yourself...' onChange={handleInputChange} />
            </div>
        </div>
    );
}

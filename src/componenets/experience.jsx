import React, { useState } from 'react';

export default function Experience({ onUpdate }) {
    const [experience, setExperience] = useState([]);

    const handleExpBtn = () => {
        const newExperience = {
            jobTitle: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
        };
        setExperience(prevExp => [...prevExp, newExperience]);
    };

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = [...experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            [name]: value
        };
        setExperience(updatedExperience);
        onUpdate(updatedExperience);
    };

    return (
        <div id='experience'>
            <h2>Professional Experience</h2>
            {experience.map((exp, index) => (
                <div key={index} className='exp'>
                    <div>
                        <label htmlFor={`jobTitle${index}`}>Job title: </label>
                        <input type="text" id={`jobTitle${index}`} name="jobTitle" value={exp.jobTitle} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`company${index}`}>Company: </label>
                        <input type="text" id={`company${index}`} name="company" value={exp.company} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`startDate${index}`}>Start Date: </label>
                        <input type="date" id={`startDate${index}`} name="startDate" value={exp.startDate} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`endDate${index}`}>End Date: </label>
                        <input type="date" id={`endDate${index}`} name="endDate" value={exp.endDate} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`description${index}`}>Description: </label>
                        <textarea id={`description${index}`} name="description" value={exp.description} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                </div>
            ))}
            <button onClick={handleExpBtn}>Add Experience</button>
        </div>
    );
}

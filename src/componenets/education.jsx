import React, { useState } from 'react';

export default function Education({ onUpdate }) {
    const [education, setEducation] = useState([]);

    const handleEduBtn = () => {
        const newEducation = {
            field: '',
            school: '',
            startDate: '',
            endDate: '',
            description: '',
        };
        setEducation(prevEdu => [...prevEdu, newEducation]);
    };

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = [...education];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value
        };
        setEducation(updatedEducation);
        onUpdate(updatedEducation);
    };

    return (
        <div id='education'>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className='edu'>
                    <div>
                        <label htmlFor={`field${index}`}>Study field: </label>
                        <input type="text" id={`field${index}`} name="field" value={edu.field} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`school${index}`}>School: </label>
                        <input type="text" id={`school${index}`} name="school" value={edu.school} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`startDate${index}`}>Start Date: </label>
                        <input type="date" id={`startDate${index}`} name="startDate" value={edu.startDate} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`endDate${index}`}>End Date: </label>
                        <input type="date" id={`endDate${index}`} name="endDate" value={edu.endDate} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`description${index}`}>Description: </label>
                        <textarea id={`description${index}`} name="description" value={edu.description} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                </div>
            ))}
            <button onClick={handleEduBtn}>Add education</button>
        </div>
    );
}

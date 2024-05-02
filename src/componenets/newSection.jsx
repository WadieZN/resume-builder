import React, { useState } from 'react';

export default function Section({ onUpdate }) {
    const [section, setSection] = useState([]);

    const handleSectionBtn = () => {
        const newSection = {
            itemTitle: '',
            item: '',
            itemDescription: '',
        };
        setSection(prevSection => [...prevSection, newSection]);
    };

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updateSection = [...section];
        updateSection[index] = {
            ...updateSection[index],
            [name]: value
        };
        setSection(updateSection);
        onUpdate(updateSection);
    };

    return (
        <div id='section'>
            <h2>New Section</h2>
            {section.map((section, index) => (
                <div key={index} className='section'>
                    <div>
                        <label htmlFor={`itemTitle${index}`}>Title: </label>
                        <input type="text" id={`itemTitle${index}`} name="itemTitle" value={section.itemTitle} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`item${index}`}>Item: </label>
                        <input type="text" id={`item${index}`} name="item" value={section.item} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div>
                        <label htmlFor={`itemDescription${index}`}>Description: </label>
                        <textarea id={`itemDescription${index}`} name="itemDescription" value={section.itemDescription} onChange={(e) => handleInputChange(index, e)} />
                    </div>
                </div>
            ))}
            <button onClick={handleSectionBtn}>Add section</button>
        </div>
    );
}

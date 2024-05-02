import React from 'react';

export default function Resume({ personalInfo, experience, education, section, about }) {
  return (
    <div className='resume-container'>
      <div id='resume'>
        <div id='personalInfoSection'>
          <h1>{personalInfo.fullName}</h1>
          <h3>{personalInfo.profession}</h3>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
        </div>
        <div id="aboutSection">
          <h1>ABOUT</h1>
          <p>{about}</p>
        </div>
        <div id='experienceSection'>
          <h1>EXPERIENCE</h1>
          {experience.map((exp, index) => (
            <div key={index} className='expText'>
              <h2>{exp.jobTitle} - <span>{exp.company}</span></h2>
              <h4>{exp.startDate} | {exp.endDate}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <div id='educationSection'>
          <h1>EDUCATION</h1>
          {education.map((edu, index) => (
            <div key={index} className='eduText'>
              <h2>{edu.field} - <span>{edu.school}</span></h2>
              <h4>{edu.startDate} | {edu.endDate}</h4>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
        <div id='sectionSection'>
          {section.map((section, index) => (
            <div key={index} className='sectionText'>
              <h1>{section.itemTitle}</h1>
              <h2>{section.item}</h2>
              <p>{section.itemDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <p id='text'><i>Tip:</i> When finished, press Ctrl + P </p>
    </div>
  );
}

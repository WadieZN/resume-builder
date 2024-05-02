import { useState } from 'react'
import PersonalInfo from './componenets/personalInfo'
import Resume from './componenets/resume'
import Experience from './componenets/experience';
import Education from './componenets/education';
import Section from './componenets/newSection';
import About from './componenets/about';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Jonathan Joestar',
    profession: 'Web Developer',
    email:  'Joestar@email.com',
    phone: '+555 555 555',
  });

  const [about, setAbout] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque voluptas impedit, quae iste esse nemo amet harum consectetur tempora fugit incidunt doloremque earum cumque numquam hic eum eaque similique reprehenderit dicta cum. Quibusdam quam illo expedita excepturi distinctio voluptatum.');

  const [experience, setExperience] = useState([]);

  const [education, setEducation] = useState([]);

  const [section, setSection] = useState([]);

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  }

  const handleExperienceUpdate = (updatedInfo) => {
    setExperience(updatedInfo);
  }

  const handleEducationceUpdate = (updatedInfo) => {
    setEducation(updatedInfo);
  }

  const handleSectionUpdate = (updatedInfo) => {
    setSection(updatedInfo);
  }

  const handleAboutUpdate = (updatedInfo) => {
    setAbout(updatedInfo);
  }

  return (
    <>
      <div id='forms'>
        <PersonalInfo onUpdate={handlePersonalInfoUpdate} />
        <About onUpdate={handleAboutUpdate} />
        <Experience onUpdate={handleExperienceUpdate} />
        <Education onUpdate={handleEducationceUpdate} />
        <Section onUpdate={handleSectionUpdate} />
      </div>
      <Resume personalInfo={personalInfo} about={about} experience={experience} education={education} section={section} />
    </>
  );
}

export default App

import React, {useState} from 'react'
import PersonalDetailsSection from './components/PersonalDetails/PersonalDetailsSection.jsx'
import EducationSection from './components/Education/EducationSection.jsx'
import ExperienceSection from './components/Experience/ExperienceSection.jsx'
import Resume from './components/Resume.jsx'
import './styles/App.css'

function App() {

  const [educationData, setEducationData] = useState('')

  const handleSaveEducation = (newEducation) => {
    setEducationData(newEducation)
  }

  return (
    <div className='app'>
        <div className='details'>
            <div className='section personal-details'>
                <PersonalDetailsSection />
            </div>
            <div className='section education-details'>
                <EducationSection onSaveEducation={handleSaveEducation} />
            </div>
            <div className='section experience-details'>
                <ExperienceSection />
            </div>
        </div>
      <Resume educationData={educationData} />
    </div>
  );
}

export default App;

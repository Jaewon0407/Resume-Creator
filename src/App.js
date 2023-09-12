import React, {useState} from 'react'
import PersonalDetailsSection from './components/PersonalDetails/PersonalDetailsSection.jsx'
import EducationSection from './components/Education/EducationSection.jsx'
import ExperienceSection from './components/Experience/ExperienceSection.jsx'
import Resume from './components/Resume.jsx'
import './styles/App.css'

function App() {

  const [educationData, setEducationData] = useState('')
  const [personalDetailsData, setPersonalDetailsData] = useState('')
  const [experienceData, setExperienceData] = useState([])

  const handleSaveEducation = (newEducation) => {
    setEducationData(newEducation)
  }

  const handleSavePersonalDetails = (newPersonalDetails) => {
    setPersonalDetailsData(newPersonalDetails)
  }

  const handleSaveExperience = (newExperience) => {
    setExperienceData([...experienceData, newExperience])
  }

  const handleUpdateExperience = (updatedExperience) => {
    setExperienceData(updatedExperience)
  }

  return (
    <div className='app'>
        <div className='details'>
            <div className='section personal-details'>
                <PersonalDetailsSection handleSavePersonalDetails={handleSavePersonalDetails} />
            </div>
            <div className='section education-details'>
                <EducationSection handleSaveEducation={handleSaveEducation} />
            </div>
            <div className='section experience-details'>
                <ExperienceSection 
                  handleSaveExperience={handleSaveExperience} 
                  handleUpdateExperience={handleUpdateExperience}
                  experienceData={experienceData}
                />
            </div>
        </div>
      <Resume 
        educationData={educationData} 
        personalDetailsData={personalDetailsData}
        experienceData={experienceData}
      />
    </div>
  );
}

export default App;

import '../styles/Resume.css'
import Education from './resume/Education.jsx'
import PersonalDetails from './resume/PersonalDetails'
import Experience from './resume/Experience.jsx'

function Resume ({ educationData, personalDetailsData, experienceData }) {

    return (
        <div className='resume-container'>
            <PersonalDetails personalDetailsData={personalDetailsData} />
            <div className='body'>
                <div className="education">
                    <div className="title">Education</div>
                    <Education educationData={educationData} />
                </div>
                <div className='experience'>
                    <div className="title">Experience</div>
                    <Experience experienceData={experienceData} />
                </div>
            </div>
        </div>
    )
}

export default Resume
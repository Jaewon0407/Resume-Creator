import '../../styles/EducationSection.css'
import {useState} from 'react'

function EducationSection ({ onSaveEducation }) {

    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [location, setLocation] = useState('')

    const handleSchoolChange = (event) => {
        setSchool(event.target.value)
    }
    
    const handleDegreeChange = (event) => {
        setDegree(event.target.value)
    }

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value)
    }

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value)
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value)
    }

    const handleSaveClick = () => {

        const newEducation = {
            school,
            degree,
            startDate,
            endDate,
            location
        }
        
        console.log(newEducation)
        onSaveEducation(newEducation)

        // Clear the input fields
        setSchool('')
        setDegree('')
        setStartDate('')
        setEndDate('')
        setLocation('')

    }

    return (
        <div className='education-info'>
            <p className='title'>Education</p>
            <div className='info school'>
                <div className='text'>
                    <p>School</p>
                </div>
                <input type="text" placeholder='Enter School / University' value={school} onChange={handleSchoolChange} />
            </div>
            <div className='info degree'>
                <div className='text'>
                    <p>Degree</p>
                </div>
                <input type="text" placeholder='Enter Degree / Field of Study' value={degree} onChange={handleDegreeChange} />
            </div>
            <div className='info start-date'>
                <div className='text'>
                    <p>Start Date</p>
                </div>
                <input type="text" placeholder='Enter Start Date' value={startDate} onChange={handleStartDateChange} />
            </div>
            <div className='info end-date'>
                <div className='text'>
                    <p>End Date</p>
                </div>
                <input type="text" placeholder='Enter End Date' value={endDate} onChange={handleEndDateChange} />
            </div>
            <div className='info location'>
                <div className='text'>
                    <p>Location</p>
                </div>
                <input type="text" placeholder='Enter Location' value={location} onChange={handleLocationChange} />
            </div>
            <div className='buttons'>
                <div className='delete'>Delete</div>
                <div className='save-cancel'>
                    <div className='cancel'>Cancel</div>
                    <div className='save' onClick={handleSaveClick}>Save</div>
                </div>
            </div>
        </div>
    )
}

export default EducationSection
import '../../styles/ExperienceSection.css'
import {useState} from 'react'

function ExperienceSection (props) {
    // Company, Position, startDate, endDate, location, description
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    const handleCompanyChange = (event) => {
        setCompany(event.target.value)
    }

    const handlePositionChange = (event) => {
        setPosition(event.target.value)
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

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSaveClick = () => {

        const newExperience = {
            company,
            position,
            startDate,
            endDate,
            location,
            description
        }

        props.handleSaveExperience(newExperience)

        // Clear the input fields
        setCompany('')
        setPosition('')
        setStartDate('')
        setEndDate('')
        setLocation('')
        setDescription('')

    }

    const handleCancelClick = () => {
        setCompany('')
        setPosition('')
        setStartDate('')
        setEndDate('')
        setLocation('')
        setDescription('')
    }

    const handleDeleteClick = (index) => {

        // Create a copy of the current experienceData array
        const updatedExperienceData = [...props.experienceData]
        updatedExperienceData.splice(index, 1)
        props.handleUpdateExperience(updatedExperienceData)

        setCompany('')
        setPosition('')
        setStartDate('')
        setEndDate('')
        setLocation('')
        setDescription('')
    }

    return (
        <div className='experience-info'>
            <p className='title'>Experience</p>
            <div className='info company-name'>
                <div className='text'>
                    <p>Company Name</p>
                </div>
                <input type="text" placeholder='Enter Company Name' value={company} onChange={handleCompanyChange} />
            </div>
            <div className='info position'>
                <div className='text'>
                    <p>Position Title</p>
                </div>
                <input type="text" placeholder='Enter Position Title' value={position} onChange={handlePositionChange} />
            </div>
            <div className='info start-date'>
                <div className='text'>
                    <p>Start-date</p>
                </div>
                <input type="text" placeholder='Enter Start Date' value={startDate} onChange={handleStartDateChange} />
            </div>
            <div className='info end-date'>
                <div className='text'>
                    <p>End-date</p>
                </div>
                <input type="text" placeholder='Enter End Date' value={endDate} onChange={handleEndDateChange} />
            </div>
            <div className='info location'>
                <div className='text'>
                    <p>Location</p>
                </div>
                <input type="text" placeholder='Enter Location' value={location} onChange={handleLocationChange} />
            </div>
            <div className='info description'>
                <div className='text'>
                    <p>Description</p>
                </div>
                <input type="text" placeholder='Enter Description' value={description} onChange={handleDescriptionChange} />
            </div>
            <div className='buttons'>
                <div className='delete' onClick={handleDeleteClick}>Delete</div>
                <div className='save-cancel'>
                    <div className='cancel' onClick={handleCancelClick}>Cancel</div>
                    <div className='save' onClick={handleSaveClick}>Save</div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection
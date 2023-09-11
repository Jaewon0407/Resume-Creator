import '../../styles/ExperienceSection.css'

function ExperienceSection () {

    const handleCancel = () => {
    }

    const handleSave = () => {
    }

    const handleDelete = () => {
    }

    return (
        <div className='experience-info'>
            <p className='title'>Experience</p>
            <div className='info company-name'>
                <div className='text'>
                    <p>Company Name</p>
                </div>
                <input type="text" placeholder='Enter Company Name'/>
            </div>
            <div className='info position'>
                <div className='text'>
                    <p>Position Title</p>
                </div>
                <input type="text" placeholder='Enter Position Title'/>
            </div>
            <div className='info start-date'>
                <div className='text'>
                    <p>Start-date</p>
                </div>
                <input type="text" placeholder='Enter Start Date'/>
            </div>
            <div className='info end-date'>
                <div className='text'>
                    <p>End-date</p>
                </div>
                <input type="text" placeholder='Enter End Date'/>
            </div>
            <div className='info location'>
                <div className='text'>
                    <p>Location</p>
                </div>
                <input type="text" placeholder='Enter Location'/>
            </div>
            <div className='info description'>
                <div className='text'>
                    <p>Description</p>
                </div>
                <input type="text" placeholder='Enter Description'/>
            </div>
            <div className='buttons'>
                <div className='delete' onClick={handleDelete}>Delete</div>
                <div className='save-cancel'>
                    <div className='cancel' onClick={handleCancel}>Cancel</div>
                    <div className='save' onClick={handleSave}>Save</div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection
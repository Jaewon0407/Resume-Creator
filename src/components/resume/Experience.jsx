import '../../styles/Experience.css'
function Experience({ experienceData }) {

    return (
        <div>
            {experienceData.map((experience, index) => (
                <div className="content" key={index} >
                    <div className="date-location">
                        <p className='date'>
                            <p className='startDate'>{experience.startDate}</p>
                            <p>{experience.endDate ? '\u00A0-\u00A0' : ''}</p>
                            <p className='endDate'>{experience.endDate}</p>
                        </p>
                        <p className='location'>{experience.location}</p>
                    </div>
                    <div className="company-position-description">
                        <p className='company'>{experience.company}</p>
                        <p className='position'>{experience.position}</p>
                        <p className='description'>{experience.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience
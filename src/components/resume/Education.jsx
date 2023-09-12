// school, degree, startData, endDate, location
import '../../styles/Education.css'
function Education({ educationData }) {

    return (
        <div className="content">
            <div className="date-location">
                <p className='date'>{educationData.startDate} {educationData.endDate ? ` - ${educationData.endDate}` : ''}</p>
                <p className='location'>{educationData.location}</p>
            </div>
            <div className='school-major'>
                <p className='school'>{educationData.school}</p>
                <p className='major'>{educationData.degree}</p>
            </div>
        </div>
    )
}

export default Education
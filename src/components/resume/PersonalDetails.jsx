import '../../styles/PersonalDetails.css'
function PersonalDetails ({ personalDetailsData }) {
     
    return (
        <div className='header'>
            <p className='full-name'>{personalDetailsData.name}</p>
            <div className='info-container'>
                <p className='email'>{personalDetailsData.email}</p>
                <p className='phone-number'>{personalDetailsData.phoneNumber}</p>
                <p className='location'>{personalDetailsData.address}</p>
            </div>
        </div>
    )
}

export default PersonalDetails
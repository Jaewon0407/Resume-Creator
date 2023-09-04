import '../../styles/PersonalDetailsSection.css'

function PersonalDetailsSection({}) {
    return (
        <div className='personal-info'>
            <p className='title'>Personal Details</p>
            <div className='info fullname'>
                <p>Full name</p>
                <input type="text" placeholder='First and last name'/>
            </div>
            <div className='info email'>
                <div className='text'>
                    <p>Email</p>
                    <p className='recommended'>recommended</p>
                </div>
                <input type="text" placeholder='Enter email'/>
            </div>
            <div className='info phonenumber'>
                <div className='text'>
                    <p>Phone number</p>
                    <p className='recommended'>recommended</p>
                </div>
                <input type="text" placeholder='Enter phone number'/>
            </div>
            <div className='info address'>
                <div className='text'>
                    <p>Address</p>
                    <p className='recommended'>recommended</p>
                </div>
                <input type="text" placeholder='City, Country'/>
            </div>
        </div>
    )
}

export default PersonalDetailsSection
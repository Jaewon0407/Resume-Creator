import '../../styles/PersonalDetailsSection.css'
import React, {useState} from 'react'

function PersonalDetailsSection (props) {

    // full-name, email, phone-number, address
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleSaveClick = () => {
            
            const newPersonalDetails = {
                name,
                email,
                phoneNumber,
                address
            }
    
            props.handleSavePersonalDetails(newPersonalDetails)
    
            // Clear the input fields
            setName('')
            setEmail('')
            setPhoneNumber('')
            setAddress('')
    
    }

    const handleCancelClick = () => {
        setName('')
        setEmail('')
        setPhoneNumber('')
        setAddress('')
    }

    const handleDeleteClick = () => {
        setName('')
        setEmail('')
        setPhoneNumber('')
        setAddress('')

        props.handleSavePersonalDetails({
            name: '',
            email: '',
            phoneNumber: '',
            address: ''
        })

    }

    return (
        <div className='personal-info'>
            <p className='title'>Personal Details</p>
            <div className='info fullname'>
                <div className='text'>
                    <p>Full name</p>
                </div>
                <input type="text" placeholder='First and last name' value={name} onChange={handleNameChange} />
            </div>
            <div className='info email'>
                <div className='text'>
                    <p>Email</p>
                    <p className='recommended'>recommended</p>
                </div>
                <input type="text" placeholder='Enter email' value={email} onChange={handleEmailChange} />
            </div>
            <div className='info phonenumber'>
                <div className='text'>
                    <p>Phone number</p>
                    <p className='recommended'>recommended</p>
                </div>
                <input type="text" placeholder='Enter phone number' value={phoneNumber} onChange={handlePhoneNumberChange} />
            </div>
            <div className='info address'>
                <div className='text'>
                    <p>Address</p>
                    <p className='recommended'>recommended</p>
                </div>
                <input type="text" placeholder='City, Country' value={address} onChange={handleAddressChange} />
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

export default PersonalDetailsSection
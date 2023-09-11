import '../styles/Resume.css'

function Resume ({ newEducationData }) {
    
    return (
        <div className='resume-container'>
            <div className='header'>
                <p className='full-name'>Jaewon Han</p>
                <div className='info-container'>
                    <p className='email'>jaewon.h4@gmail.com</p>
                    <p className='phone-number'>778-951-1261</p>
                    <p className='location'>Surrey, BC</p>
                </div>
            </div>
            <div className='body'>
                <div className='education'>
                    <div className='title'>Education</div>
                    <div className='content'>
                        <div className='date-location'>
                            <p className='date'>08/2020 - present</p>
                            <p className='location'>New York City, US</p>
                        </div>
                        <div className='school-major'>
                            <p className='school'>London City University</p>
                            <p className='major'>Bachelors in Economics</p>
                        </div>
                    </div>
                </div>
                <div className='experience'></div>
            </div>
        </div>
    )
}

export default Resume
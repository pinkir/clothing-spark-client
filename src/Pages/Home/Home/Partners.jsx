import { LightSpeed } from 'react-reveal'
import logo1 from '../../../images/logo1.jpg'
import logo2 from '../../../images/logo2.jpg'
import logo4 from '../../../images/logo4.jpg'
import logo5 from '../../../images/logo5.jpg'
import logo6 from '../../../images/logo6.jpg'

const Partners = () => {
    return (
        <div>
            <div className='text-center mt-36 bg'>
                <h3 className=' text-4xl mb-3'>Our Partners</h3>
            </div>
            <div className='lg:flex justify-around'>
                <LightSpeed bottom>
                <img className='h-40' src={logo1} alt="" />
                <img className='h-40' src={logo2} alt="" />
                <img className='h-40' src={logo6} alt="" />
                <img className='h-40' src={logo4} alt="" />
                <img className='h-40' src={logo5} alt="" />
                </LightSpeed>
                
            </div>
        </div>
    );
};

export default Partners;
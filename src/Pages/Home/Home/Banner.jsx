

import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.jpg'
import banner4 from '../../../images/banner4.jpg'
import vdo from '../../../images/vdo.mp4'
import male from '../../../images/male.jpg'
import female from '../../../images/female.jpg'
import { Zoom } from 'react-reveal'





const Banner = () => {
    return (



        <div >
            <div className='pt-16'>
                {/* <img className='border-t-4 border-amber-300 w-full' src={banner4} /> */}
                <video width="100%" height="500" controls autoPlay muted >
                    <source src={vdo} type="video/mp4" />
                </video>
            </div>
            <div className='flex justify-center gap-4 '>
                <Zoom>
                <img className='w-1/3 h-1/3  shadow-2xl rounded-full ' src={male} />
                <img className='w-1/3 h-1/3 shadow-2xl rounded-full' src={female} />
                </Zoom>

            </div>
        </div>

    );
};

export default Banner;
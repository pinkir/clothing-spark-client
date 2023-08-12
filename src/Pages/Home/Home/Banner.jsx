

import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.jpg'
import banner4 from '../../../images/banner4.jpg'
import banner10 from '../../../images/banner10.png'
import vdo from '../../../images/vdo.mp4'
import male from '../../../images/male.jpg'
import female from '../../../images/female.jpg'
import { Zoom } from 'react-reveal'





const Banner = () => {
    return (



        <div >
            <div className='pt-16'>
                <img className='border-t-8 border-amber-300 w-full' src={banner10} />

            </div>
            <div className='flex justify-center '>
                <div>
                    <video width="100%" height="500" controls autoPlay muted >
                        <source src={vdo} type="video/mp4" />
                    </video>
                </div>
                <div>
                    <Zoom>
                        {/* <img className='w-full h-1/2  shadow-2xl' src={male} /> */}
                        <img className='w-full h-full shadow-2xl ' src={female} />
                    </Zoom>
                </div>

            </div>
        </div>

    );
};

export default Banner;
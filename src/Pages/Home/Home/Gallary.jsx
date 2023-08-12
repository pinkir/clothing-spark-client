import banner6 from '../../../images/banner6.jpg'
import banner7 from '../../../images/banner7.jpg'
import banner8 from '../../../images/banner8.jpg'
import banner9 from '../../../images/banner9.jpg'
import banner10 from '../../../images/banner10.jpg'
import banner11 from '../../../images/banner11.jpg'
import banner12 from '../../../images/banner12.jpg'
import { Fade, Flip } from 'react-reveal'


const Gallary = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='text-center  text-4xl font-bold p-5 mt-40'>Photo Gallery</h3>

            <div className='grid grid-cols-3 gap-2 bg-slate-100 p-5' >
                <Fade top>
                    <div className='h-3 mb-2' id='id'>
                        <img src={banner8} alt="" />
                    </div>
                </Fade>
                <Fade right>
                    <div className='col-span-2' >
                        <img data-aos="flip-up" src={banner9} alt="" />
                    </div>
                </Fade>
                <Fade left>
                    <div >
                        <img src={banner6} alt="" />
                    </div>
                </Fade>


                <Flip bottom>
                    <div >
                        <img src={banner7} alt="" />
                    </div>
                </Flip>
                <Fade right>
                    <div >
                        <img src={banner10} alt="" />
                    </div>
                </Fade>


                <Fade bottom>
                    <div className='col-span-2'>
                        <img src={banner11} alt="" />
                    </div>
                    <div className='h-full'>
                        <img className='h-full' src={banner12} alt="" />
                    </div>
                </Fade>



            </div>
        </div>
    );
};

export default Gallary;
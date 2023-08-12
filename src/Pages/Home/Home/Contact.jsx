import { useRef } from 'react';
import banner3 from '../../../images/banner4.jpg'



const Contact = () => {
    
    return (
        <div>
            <div id='projects' className='bg-gray-800 h-full bg-fixed mt-40' style={{ backgroundImage: `url(${banner3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div className=" text-white ps-36 pt-10 pb-20">
                    <h1 className="text-4xl text-red-400 font-extrabold text-start mt-40 ">Visit Us Or Contact Us</h1>
                    <div className=' text-white'>
                        <h3 className="text-3xl font-bold mt-5">Message Us Here!!</h3>
                        <form className='text-black'>
                            <input className='mb-3 mt-3 p-2 w-3/4 bg-red-200 opacity-50   rounded' type='text' placeholder="Your Name" name='name' required />
                            <br />
                            <input className='mb-3 p-2 w-3/4 rounded bg-red-200 opacity-50' type='email' placeholder="Your Email" name='email' required />
                            <br />

                            <textarea className='p-2 w-3/4 rounded bg-red-200 opacity-50' rows={4} placeholder='Message' name='message' required />
                            <br />
                            <button className='mt-3 bg-red-400 rounded p-2 text-slate-800' type="submit" name='submit' >
                                Send
                            </button>
                        </form>

                    </div>
                </div>

            </div>
            <div>
                <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=dhaka,%20bangladesh+(Pinki%20Roy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
            </div>

        </div>
    );
};

export default Contact;
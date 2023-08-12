import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import banner10 from '../../../images/banner10.png'


const Footer = () => {
    return (
        <div className="bg-slate-900" style={{ backgroundImage: `url(${banner10})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>

            <div className='mt-40 p-5 bg-yellow-300 bg-opacity-60 flex justify-around items-center '  >
                <h3 className='text-3xl text-black'>Let's Stay Connected<FaArrowRight></FaArrowRight></h3>
                <div>
                    <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs bg-slate-100" />
                    <button className="btn mt-2">Subscribe</button>
                </div>


            </div>
            <footer className="footer p-12  text-white" >
                <div>

                    <p><FaShoppingCart className="text-3xl"></FaShoppingCart><span className="text-3xl font-bold text-yellow-400">Clothing Spark</span><br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;

import useTitle from '../../Hooks/usetitle';
import bg from '../../images/banner5.jpg'
import { Link } from 'react-router-dom';


const Login = () => {
    useTitle('Login')
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-600 bg-opacity-20 my-8">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input placeholder="password"
                                name="password"
                                className="input input-bordered" />
                        </div>


                        <div className="form-control mt-6">
                            <input className="btn btn-info" type="submit" value="Login" />
                        </div>
                        <p>New to Clothing Spark?? Please <Link to='/register' className='text-red-400 font-extrabold'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
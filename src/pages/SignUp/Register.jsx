import React, { useContext } from 'react';
import picture from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>console.log(error))

        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-12 w-1/2">
                    <img src={picture} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-3xl font-bold text-red-600 text-center'>Sign up</h1>
                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-red-600" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>Already Have an Account?<Link className='text-red-600 font-bold' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
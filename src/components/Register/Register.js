import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-[#242933]">
        <div className="flex justify-between flex-col lg:w-4/5  lg:flex-row-reverse">
          <div className="text-center text-[#b7b7b7] items-center flex flex-col justify-center w-full lg:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. 
            </p>
          </div>
          <div className="card mx-auto w-full  max-w-sm shadow-2xl bg-[#2A303C]">
            <div className="card-body ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[#b7b7b7]">Your name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[#b7b7b7]">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className="flex justify-between">
              <label className="label">
                  <Link to='/' className="label-text-alt link text-[#b7b7b7] hover:text-white">
                    Forgot password?
                  </Link>
                </label>
              <label className="label">
                  <Link to='/login' className="label-text-alt link text-[#b7b7b7] hover:text-white">
                      Log in
                  </Link>
                </label>
            </div>

            </div>
          </div>
        </div>
      </div>
    );
}

export default Register;

import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[50vh]" style={{backgroundImage: 'url("https://i.ibb.co/RCPLFkg/Clothing.png")'}}>
        <div className="hero-overlay bg-slate-400 bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className='flex items-center gap-3'>
            <input type="text" placeholder="Search here" className="input input-bordered input-error w-full max-w-xs" />
            <button className="btn btn-error">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
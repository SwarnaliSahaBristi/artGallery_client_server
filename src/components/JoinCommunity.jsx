import React from "react";

const JoinCommunity = () => {
  return (
    <div className="bg-gray-300">
      <div className="py-6">
        <h1 className="text-center text-5xl">
          Join Our Community and Rate Us!
        </h1>
        <div className="join flex justify-center items-center mt-8">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn button-gradient join-item">Join</button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;

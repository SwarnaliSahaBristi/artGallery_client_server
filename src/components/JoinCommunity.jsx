import React from "react";

const JoinCommunity = () => {
  return (
    <div className="relative py-16 bg-base-100 text-base-content overflow-hidden">

      {/* 🔵 Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-3xl mx-auto text-center px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Join Our Creative Community ✨
        </h1>
        <p className="mt-4 text-lg opacity-70">
          Connect with artists, explore ideas, and share your creativity with the world.
        </p>

        {/* Glass Card */}
        <div className="mt-10 p-6 rounded-3xl backdrop-blur-xl 
                        bg-white/30 dark:bg-white/10 
                        border border-white/20 shadow-xl">

          <div className="join flex flex-col sm:flex-row items-center gap-4">

            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email..."
              className="input input-bordered w-full 
                         bg-base-100/70 dark:bg-gray-900/60 
                         border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            {/* Button */}
            <button className="btn button-gradient">
              Join Now 🚀
            </button>

          </div>

          <p className="text-sm mt-4 opacity-60">
            No spam. Only creative vibes 🎨
          </p>

        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
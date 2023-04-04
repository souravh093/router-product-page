import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-base-50 grid grid-cols-2 container mx-auto">
        <div className="grid grid-cols-1 items-center">
            <div>
            <h1 className="text-7xl font-bold">Buy 1 Get Free</h1>
            <p className="py-6 max-w-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        <div>
            <Player
            src='mobileAnimation.json'
            className='player'
            loop
            autoplay
            />
        </div>
        </div>
    );
};

export default Home;
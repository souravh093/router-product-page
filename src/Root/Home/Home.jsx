import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="h-[calc(100vh-116px)] bg-base-50 grid grid-cols-2 items-center container mx-auto">
        <div className="grid grid-cols-1 items-center">
            <div>
            <h1 className="text-7xl font-bold">Buy 1 Get Free</h1>
            <p className="py-6 max-w-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/products'><button className="btn btn-secondary">Get Started</button></Link>
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
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FeaturedArtwork from '../components/FeaturedArtwork';
import EventsAndPrograms from '../components/EventsAndPrograms';
import ArtistWeek from '../components/ArtistWeek';
import JoinCommunity from '../components/JoinCommunity';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedArtwork></FeaturedArtwork>
            <EventsAndPrograms></EventsAndPrograms>
            <ArtistWeek></ArtistWeek>
            <JoinCommunity></JoinCommunity>
        </div>
    );
};

export default Home;
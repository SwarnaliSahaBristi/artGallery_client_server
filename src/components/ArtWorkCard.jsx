import React from 'react';
import { SlLike } from 'react-icons/sl';
import { Link } from 'react-router';

const ArtWorkCard = ({artWork}) => {
    const {imageUrl,title,category,userName,likesCount,userEmail,_id}= artWork;

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt=''
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge text-xs badge-xs badge-secondary rounded-full">{category}</div>
        <div className="text-xs text-secondary">Artist Name:{userName}</div>
        <div className="text-xs text-secondary">Artist Email: : {userEmail}</div>
        <p className="btn button-outline">Liked By: {likesCount}<SlLike /></p>
        <div className="card-actions justify-between items-center mt-4">
          <Link to={`/viewDetails/${_id}`} className='btn button-gradient w-full'>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ArtWorkCard;
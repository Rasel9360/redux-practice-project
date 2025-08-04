import React from 'react';

const PhotoCard = ({ photo }) => {
    return (
        <div className='border rounded-md p-4 shadow-sm space-y-2'>
            <h2 className='text-lg font-semibold'>{photo.title}</h2>
            <img src={photo.thumbnailUrl} alt="" />
        </div>
    );
};

export default PhotoCard;
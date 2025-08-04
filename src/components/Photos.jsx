import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from "../features/photos/photosSlice"
import PhotoCard from './PhotoCard';

const Photos = () => {
    const { photos, isLoading, isError, error } = useSelector(state => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch])


    let content;

    if (isLoading) {
        content = <p>Loading...</p>
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>
    }
    if (!isLoading && !isError && photos.length === 0) {
        content = <p>No photos found</p>
    }
    if (!isLoading && !isError && photos.length > 0) {
        content = photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
    }

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 m-6'>
            {content}
        </div>
    );
};

export default Photos;
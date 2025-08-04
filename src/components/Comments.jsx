import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from "../features/comments/commentsSlice"
import CommentCard from '../components/CommentCard';


const Comments = () => {
    const { comments, isLoading, isError, error } = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <p>Loading.......</p>
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>
    }
    if (!isLoading && !isError && comments.length === 0) {
        content = <p>No comments yet!</p>
    }
    if (!isLoading && !isError && comments.length > 0) {
        content = comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)
    }

    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 m-6'>
            {content}
        </div>
    );
};

export default Comments;
import React from 'react';

const CommentCard = ({ comment }) => {
    return (
        <div className='border rounded-md p-4 shadow-sm space-y-2'>
            <h2 className='text-lg font-semibold'>{comment.name}</h2>
            <p className='font-semibold'>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentCard;
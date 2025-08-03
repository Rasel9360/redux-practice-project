import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const Post = () => {
    const { posts, isLoading, isError, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    };

    if (!isLoading && isError) {
        content = <p>{error}</p>
    };

    if (!isLoading && !isError && posts.length === 0) {
        content = <p>No posts yet</p>;
    };

    if (!isLoading && !isError && posts.length > 0) {
        content = <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    };

    // console.log(content);


    return (
        <div>
            {
              content
            }
        </div>
    );
};

export default Post;
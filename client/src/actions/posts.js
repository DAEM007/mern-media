import * as api from '../api';

// Action creators
const getposts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
        
    } catch (err) {
        console.log(err.message);
    }
};

const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });

    } catch (err) {
        console.log(err.message);
    }
};

export {
    getposts,
    createPost,
};


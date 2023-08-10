
const getPosts = (req, res) => {
    res.send('This works!');
};

const createPost = (req, res) => {
    res.send('post creation');
};  

export { 
    getPosts,
    createPost,
};
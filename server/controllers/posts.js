import postMessage from "../models/postMessage.js";

const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const createPost = (req, res) => {
    res.send('post creation');
};  

export { 
    getPosts,
    createPost,
};
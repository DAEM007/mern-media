import mongoose from "mongoose";

// create schema
const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;
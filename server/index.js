// All imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

// initialise express app
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect to database
const CONNECTION_URL = 'mongodb+srv://mern-media:media123@cluster0.8snuhrq.mongodb.net/';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server now running on port ${PORT}`)))
    .catch(err => console.log(err.message))

// mongoose.set('useFindAndModify', false);
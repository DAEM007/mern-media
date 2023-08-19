// All imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

// initialise express app
const app = express();

// middlewares

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

// connect to database
const CONNECTION_URL = 'mongodb+srv://daem007:Daem123@cluster0.8snuhrq.mongodb.net/memory-mern?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server now running on port ${PORT}`)))
    .catch(err => console.log(err.message))

// mongoose.set('useFindAndModify', false);
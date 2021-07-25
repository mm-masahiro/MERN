import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();
const connection_user_name = process.env.CONNECTION_USERNAME
const connection_password = process.env.CONNECTION_PASSWORD

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://${connection_user_name}:${connection_password}@cluster0.fcd5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
				.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
				.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

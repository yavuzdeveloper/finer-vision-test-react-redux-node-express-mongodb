import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();


app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);

//connect mongodb;
const CONECTION_URL = "mongodb+srv://root:root@cluster0.sfv9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose.connect(CONECTION_URL, { userNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



    mongoose.set('useFindAndModify', false);
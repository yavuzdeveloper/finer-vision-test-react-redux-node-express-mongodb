import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    firstName: String,
    surName: String,
    email: String,
    telephoneNumber: String,
    gender: String,
    dateOfBirth: String,
    comments: String,
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
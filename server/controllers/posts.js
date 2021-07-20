import PostMessage from '../models/postMessage.js';


export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
  
    const { firstName, surName, email, telephoneNumber, gender, dateOfBirth, comments } = req.body;

    const newPostMessage = new PostMessage({ firstName, surName, email, telephoneNumber, gender, dateOfBirth, comments })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
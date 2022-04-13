import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: {type: String, required: true},
    topic: String,
    time: String,
    title: String,
    stats: {
        likes: Number,
        retuits: Number,
        comments: Number,
        dislikes: Number
    },
    liked: Boolean,
    verified: Boolean,
    postedBy: {
        username: {type: String, required: true},
        avatarIcon: String,
        handle: String
    }
}, {collection: 'tuits'});
export default schema;
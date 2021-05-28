import mongoose from 'mongoose';

const topicSchema = mongoose.Schema({
    _id: String,
    children: [String],
    subtopics: [String],
    questions: [Number]
})

var TopicTree = mongoose.model('Topic-tree', topicSchema, 'topic-and-questions');

export default TopicTree;
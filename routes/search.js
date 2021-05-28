import express from 'express'
const router = express.Router()
import TopicTree from '../models/topic.js'

const getQuestions = async (req, res) => {

    var parent_topic = req.query.q;
    if (parent_topic == "all") {
        parent_topic = "Biology"
    }

    try {

        const topic_object = await TopicTree.findById(parent_topic);
        const questions = topic_object.questions
        res.status(200).json(questions)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

router.get('/', getQuestions)

export default router;
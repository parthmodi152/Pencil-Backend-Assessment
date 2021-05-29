# Pencil Backend Assessment

The goal of this assignment is to store and create an index over question objects in **MongoDB**, and write a **NodeJS + Express** based server that exposes a RESTful API to query the index and return questions that match the query.
 
Each question will be annotated with one or more annotations. An annotation is defined as a topic that can come from a topic tree.

The application is hosted using Heroku and you can try it out using the following link:

[Try Now](https://pencil-backend-assessment.herokuapp.com/)

## Database Schema

For each topic in the topic tree, the database stores the following information:

 - **_id**: Topic name (Unique)
 - **children**: Immediate children/subtopics of the topic
 - **subtopics**: All the subtopics that come under the topic
 - **questions**: All the question numbers which have at least one of the subtopics in their annotation

![MongoDB Schema](https://github.com/parthmodi152/Pencil-Backend-Assessment/blob/master/PencilBackendMongoDB-Schema.png?raw=true)

## Queries
**METHOD** : GET
**endpoint** : /search
**query param**: q=name of topic

(For querying the root, use q=all or q=Biology)

**Sample Queries:**

 - Breakdown of alcohol: [https://pencil-backend-assessment.herokuapp.com/search?q=Breakdown%20of%20alcohol](https://pencil-backend-assessment.herokuapp.com/search?q=Breakdown%20of%20alcohol)
 - Golgi body: [https://pencil-backend-assessment.herokuapp.com/search?q=Golgi%20body](https://pencil-backend-assessment.herokuapp.com/search?q=Golgi%20body)
 - State the role of blood in transport and defence: [http://pencil-backend-assessment.herokuapp.com/search?q=State%20the%20role%20of%20blood%20in%20transport%20and%20defence](http://pencil-backend-assessment.herokuapp.com/search?q=State%20the%20role%20of%20blood%20in%20transport%20and%20defence)
 - Absorption – root hair cells [http://pencil-backend-assessment.herokuapp.com/search?q=Absorption%20%E2%80%93%20root%20hair%20cells](http://pencil-backend-assessment.herokuapp.com/search?q=Absorption%20%E2%80%93%20root%20hair%20cells)
 - All Questions i.e. root: [https://pencil-backend-assessment.herokuapp.com/search?q=all](https://pencil-backend-assessment.herokuapp.com/search?q=all)

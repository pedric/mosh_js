const express = require('express');
const router = express.Router();

const courses = [
    {id:1,name:'kurs ett'},
    {id:2,name:'kurs två'},
    {id:3,name:'kurs tre'}
];

let numbers = [1,2,3];

router.get('/', (req,res) => {
    res.send(courses);
});

router.get('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send({error: 404,fail: `No course with that id`});
        return;
    }
    res.send(course);
});

module.exports = router;
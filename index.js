const express = require('express');
const Joi = require('joi');
const logger = require('./logger');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const courses = require('./routes/genres');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use(logger);
app.use('/api/courses',courses);
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
}

const port = process.env.PORT || 3000 ;
app.listen(port, () => { console.log(`listening on: http://localhost:${port}`) });
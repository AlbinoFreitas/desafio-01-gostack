const express = require('express');

const routes = express.Router();

const ProjectController = require('./controllers/ProjectController')
const TaskController = require('./controllers/TaskController');

const { findProjectById } = require('./middlewares/ProjectMiddleware');

routes.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to this api'
  });
});

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.get('/projects/:id', findProjectById, ProjectController.show);
routes.delete('/projects/:id', findProjectById, ProjectController.destroy);
routes.put('/projects/:id', findProjectById, ProjectController.update);

routes.post('/projects/:id/tasks', findProjectById, TaskController.store)

module.exports = routes;
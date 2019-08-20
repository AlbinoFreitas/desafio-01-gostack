const Project = require('../models/Project');

module.exports = {
  async findProjectById(req, res, next){
    const { id } = req.params;

    const project = await Project.findById(id);

    if(!project){
      return res.status(404).json({
        status: false,
        message: 'Project not found'
      });
    }

    req.project = project;

    return next();
  }
}
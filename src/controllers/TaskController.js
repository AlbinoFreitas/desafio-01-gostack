const Project = require('../models/Project');

module.exports = {
  async store(req, res){
    const { project } = req;
    const { title } = req.body;

    project.tasks.push(title);
    await project.save();

    return res.json(project);
  }
}
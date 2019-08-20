const Project = require('../models/Project');

module.exports = {
  async index(req, res){
    const projects = await Project.find({});

    return res.json(projects);
  },

  async store(req, res){
    const { title } = req.body;
    
    const project = await Project.create({
      title 
    });

    return res.json(project);
  },

  async show(req, res){
    const { project } = req;

    return res.json(project);
  },

  async destroy(req, res){
    const { project } = req;

    await project.delete();

    res.json({
      status: true, 
      message: `The Project was deleted`
    });
  },

  async update(req, res){
    const { project } = req;
    const { title } = req.body;

    project.title = title;
    project.save();

    return res.json(project);
  }
}
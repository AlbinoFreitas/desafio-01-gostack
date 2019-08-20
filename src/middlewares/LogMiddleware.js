const Log = require('../models/Log');

module.exports = {
  async saveRequest(req, res, next){
    await Log.create({
      url: req.originalUrl,
      body: req.body,
      params: req.params,
      query: req.query,
      method: req.method
    });

    return next();
  }
}
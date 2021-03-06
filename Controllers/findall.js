const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Tutorial.findAll({ where: condition }).then(data => {res.send(data);}).catch(err => {
        res.status(500).send({
          message:
            err.message 
        });
      });
};
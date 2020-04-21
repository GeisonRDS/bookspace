const UserModel = require('../model/UserModel');

class LoginController {
  async index(req, res){ 
    await UserModel.findOne(
            {'email': req.body.email},
            {'password': req.body.password}
            )
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async update(req, res){
    await UserModel.findOneAndUpdate({'email': req.body.email}, req.body, { new: true })
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });

  }
}

module.exports = new LoginController();
const UserModel = require('../model/UserModel');

class UserController {
  async index(req, res){ 
    await UserModel.find()
            .sort('when')
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }
  
  async show(req, res){
    await UserModel.findById(req.params.id)
            .then(response => {
              if(response)
                return res.status(200).json(response);
              else
                return res.status(404).json({error: 'usuário não encontrado'});
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async create(req, res) {
    const user = new UserModel(req.body);
    await user
            .save()
            .then(response => {
              return res.status(200).json(response)
            })
            .catch(error => {
              return res.status(500).json(error);
            });
            console.log(user);
  }

  async update(req, res){
    await UserModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async delete(req, res){
    await UserModel.deleteOne({'_id': req.params.id})
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async search(req, res){
    const search = req.params.search;
    await UserModel.find({$or:[
              {name: {$regex: search, $options: 'i'}},
              {email: {$regex: search, $options: 'i'}},
              {whatsapp: {$regex: search, $options: 'i'}},
              {city: {$regex: search, $options: 'i'}},
              {uf: {$regex: search, $options: 'i'}},
            ]})
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

}

module.exports = new UserController();

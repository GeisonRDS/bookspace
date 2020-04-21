const BookModel = require('../model/BookModel');

class BookController {
  async index(req, res){ 
    await BookModel.find()
            .sort('when')
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }
  
  async show(req, res){
    await BookModel.findById(req.params.id)
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
    console.log(req.body);
    const book = new BookModel(req.body);
    await book
            .save()
            .then(response => {
              return res.status(200).json(response)
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async update(req, res){
    await BookModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async delete(req, res){
    await BookModel.deleteOne({'_id': req.params.id})
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async search(req, res){
    const search = req.params.search;
    await BookModel.find({$or:[
              {title: {$regex: search, $options: 'i'}},
              {genre: {$regex: search, $options: 'i'}},
              {author: {$regex: search, $options: 'i'}}
            ]})
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

}

module.exports = new BookController();
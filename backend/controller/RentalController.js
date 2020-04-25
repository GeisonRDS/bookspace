const RentalModel = require('../model/RentalModel');
const BookModel = require('../model/BookModel');
const current = new Date();

class RentalController {
  async index(req, res){ 
    await RentalModel.find()
            .sort('when')
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }
  
  async show(req, res){
    await RentalModel.findById(req.params.id)
            .then(response => {
              if(response)
                return res.status(200).json(response);
              else
                return res.status(404).json({error: 'Aluguel do livro não encontrado'});
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async rentedLate(req, res){
    if(req.params.option === "rented"){
      await RentalModel.find({$and: [{'devolution': ""},
                                {'expected_return_date': {$gt: current}}]})
              .then(response => {
                if(response){
                  return res.status(200).json(response);
                }else
                  return res.status(404).json(error);
              })
              .catch(error => {
                return res.status(500).json(error);
              });
    }else if(req.params.option === "late"){
      await RentalModel.find({$and: [{'devolution': ""},
                                {'expected_return_date': {$lt: current}}]})
              .then(response => {
                if(response){
                  return res.status(200).json(response);
                }else
                  return res.status(404).json(error);
              })
              .catch(error => {
                return res.status(500).json(error); 
              }); 
    }else{
      return res.status(500).json({error: 'Nenhum registro encontrado'}); 
    }
  }

  async create(req, res) {
    const rental = new RentalModel(req.body);
    const book = req.body.book_id;
    var views = await BookModel.findOne({'_id': book});
    await rental
            .save()
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
    await BookModel.findByIdAndUpdate({'_id': book}, {'views': views.views + 1}, { new: true });
  }

  async update(req, res){
    await RentalModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async delete(req, res){
    await RentalModel.deleteOne({'_id': req.params.id})
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

  async search(req, res){
    const search = req.params.search;
    await RentalModel.find({$or:[
              {user_name: {$regex: search, $options: 'i'}},
              {user_email: {$regex: search, $options: 'i'}},
              {user_whatsapp: {$regex: search, $options: 'i'}},
              {book_title: {$regex: search, $options: 'i'}},
              {book_author: {$regex: search, $options: 'i'}}
            ]})
            .then(response => {
              return res.status(200).json(response);
            })
            .catch(error => {
              return res.status(500).json(error);
            });
  }

}

module.exports = new RentalController();

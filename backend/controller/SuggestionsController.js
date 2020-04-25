const RentalModel = require('../model/RentalModel');

class SuggestionsController {
  async index(req, res){ 
    var rentals = await RentalModel.find({'user_id': req.params.user_id});
    rentals.forEach (function (){
      console.log(JSON.stringify(rentals.user_name))
    })
    return res.status(200).json(rentals);
  }

}

module.exports = new SuggestionsController();

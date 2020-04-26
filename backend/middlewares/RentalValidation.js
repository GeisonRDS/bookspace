const RentalModel = require('../model/RentalModel');

const RentalValidation = async (req, res, next) => {

  const { user_id, user_name, user_email, book_id, book_title, expected_return_date } = req.body;

  if(!user_id)
    return res.status(400).json({ error: 'User_id é obrigatório' });
  else if(!user_name)
    return res.status(400).json({ error: 'User_name é obrigatório'});
  else if(!user_email)
    return res.status(400).json({ error: 'User_email é obrigatório'});
  else if(!book_id)
    return res.status(400).json({ error: 'Book_id é obrigatório'});
  else if(!book_title)
    return res.status(400).json({ error: 'Book_title é obrigatória'});
  else if(!expected_return_date)
    return res.status(400).json({ error: 'Expected_return_date é obrigatória'});
  
  else{
    let exists;

    if(book_title){
      exists = await RentalModel.
                    findOne({ 
                      $and: [{'book_title': book_title},
                             {'devolution': null}]
                    });
    }
    
    if(exists){
      return res.status(400).json({ error: 'O livro já está alugado.'});
    }

    next();
  }

}

module.exports = RentalValidation;

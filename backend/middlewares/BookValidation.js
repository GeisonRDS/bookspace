const BookModel = require('../model/BookModel');

const BookValidation = async (req, res, next) => {

  const { title, genre, synopse, author, cover_url} = req.body;

  if(!title)
    return res.status(400).json({ error: 'Título é obrigatório' });
  else if(!genre)
    return res.status(400).json({ error: 'Gênero é obrigatório'});
  else if(!synopse)
    return res.status(400).json({ error: 'Synopse é obrigatória'});
  else if(!author)
    return res.status(400).json({ error: 'Autor é obrigatória'});
  else if(!cover_url)
    return res.status(400).json({ error: 'Url da capa é obrigatória'});
  
  else{
    let exists;

    if(title){
      exists = await BookModel.
                    findOne({ 'title': { '$eq': title }});
    }
    
    if(exists){
      return res.status(400).json({ error: 'Já existe um livro com o título informado.'});
    }

    next();
  }

}

module.exports = BookValidation;

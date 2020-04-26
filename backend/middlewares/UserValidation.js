const UserModel = require('../model/UserModel');

const UserValidation = async (req, res, next) => {

  const { profile, name, email, password} = req.body;

  if(!profile || (profile < 0 || profile > 2))
    return res.status(400).json({ error: 'Permissão negada' });
  else if(!name)
    return res.status(400).json({ error: 'Nome é obrigatório'});
  else if(!email)
    return res.status(400).json({ error: 'E-mail é obrigatório'});
  else if(!password)
    return res.status(400).json({ error: 'Senha é obrigatória'});
  
  else{
    let exists;

    if(email){
      exists = await UserModel.
                    findOne({ 'email': { '$eq': email }});
    }
    
    if(exists){
      return res.status(400).json({ error: 'Já existe um usuário com o e-mail informado.'});
    }

    next();
  }

}

module.exports = UserValidation;

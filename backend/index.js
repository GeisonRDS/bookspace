const express = require('express');
const server = express();
server.use(express.json());

const LoginRoutes = require('./routes/LoginRoutes');
server.use('/login', LoginRoutes);

const UserRoutes = require('./routes/UserRoutes');
server.use('/user', UserRoutes);

const BookRoutes = require('./routes/BookRoutes');
server.use('/book', BookRoutes);

const RentalRoutes = require('./routes/RentalRoutes');
server.use('/rental', RentalRoutes);

const SuggestionsRoutes = require('./routes/SuggestionsRoutes');
server.use('/suggestions', SuggestionsRoutes);

server.listen(3333, () => {
  console.log('API ONLINE');
});

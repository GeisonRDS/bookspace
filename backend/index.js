const express = require('express');
const server = express();
server.use(express.json());

const UserRoutes = require('./routes/UserRoutes');
server.use('/user', UserRoutes);

server.listen(3333, () => {
  console.log('API ONLINE');
});
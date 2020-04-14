const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.send({ message: 'Hello GoStack' });
})

app.listen(3333, () => {
  console.log('🚀 Back-end started!')
});
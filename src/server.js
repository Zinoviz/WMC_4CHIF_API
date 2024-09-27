const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bober Kurwa')
});

app.get('/bikes', (req, res) => {
    res.json(bikes);
  });

  app.get('/bikes/:bikeId', (req, res) => {
    const bikeId = req.params.bikeId;
    const bike = bikes.find(bike => bike.id === bikeId);
    if (!bike){
        res.status(404).send("Bike not found");
    }else{
        res.json(bike);
    }
  });  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

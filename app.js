const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
/**
 * importation du router authentification dans notre appli
 */
 const userRoutes = require('./routes/user');
/**
 * Importation du fichier thing dans le models
 */
 const Thing = require('./models/thing');

const app = express();
/**
 * connexion à mongodb atlass
 * avec des configuration dans le cluster
 */
 mongoose.connect('mongodb+srv://thierno:<password>@projet01.ngwma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  /**
   * configuration du cors
   */

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  /**
   * body-parser
   */
  app.use(bodyParser.json());
  
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
  /**
   * Exportation  du fichier
   */
module.exports = app;
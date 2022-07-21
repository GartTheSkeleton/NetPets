const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://netpets1234:netpets1234@cluster0.e2dhy.mongodb.net/netpets_db?retryWrites=true&w=majority'
    ,
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }
    
  );

module.exports = mongoose.connection;
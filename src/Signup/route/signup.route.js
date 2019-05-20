	
module.exports = function(app) {
    const signup = require('../controller/signup.controller');
 
    // Create a new Customer
    app.post('/api/signup', signup.create);
 
    // // Retrieve all Customer
     app.get('/api/signup', signup.findAll);
 
    // // Retrieve a single Customer by Id
     app.get('/api/signup/:id', signup.findById);
 
    // // Update a Customer with Id
     app.put('/api/signup/:id', signup.update);
 
    // // Delete a Customer with Id
    app.delete('/api/signup/:id', signup.delete);
}
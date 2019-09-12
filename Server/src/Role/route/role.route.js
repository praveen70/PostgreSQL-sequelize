module.exports = function(app) {
    const role = require('../controller/controller.role');
 
    // Create a new Customer
    app.post('/api/role', role.create);

    app.get('/api/role', role.findAll);
 
    // // // Retrieve all Customer
    //  
 
    // // // Retrieve a single Customer by Id
    //  app.get('/api/signup/:id', signup.findById);
 
    // // // Update a Customer with Id
    //  app.put('/api/signup/:id', signup.update);
 
    // // // Delete a Customer with Id
    // app.delete('/api/signup/:id', signup.delete);
}
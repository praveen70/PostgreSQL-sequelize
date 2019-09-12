module.exports = function(app) {
    const permission = require('../controller/permission.controller');
 
    // Create a new Customer
    app.post('/api/permission', permission.create);

    // app.get('/api/role', role.findAll);
 
    // // // Retrieve all Customer
    //  
 
    // // // Retrieve a single Customer by Id
    //  app.get('/api/signup/:id', signup.findById);
 
    // // // Update a Customer with Id
    //  app.put('/api/signup/:id', signup.update);
 
    // // // Delete a Customer with Id
    // app.delete('/api/signup/:id', signup.delete);
}
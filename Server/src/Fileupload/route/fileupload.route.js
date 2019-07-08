module.exports = function(app) {
 
    const file= require('../controller/fileupload.controller ');
    
    // Create a new Employee
    app.post('/api/file', file.create);
 
    // Retrieve all Employee
//     app.get('/api/empdocs', empdocs.findAll);
 
// //     // Retrieve a single Customer by Id
//     app.get('/api/empdocs/:empdocId', empdocs.findById);
 
// //     // // Update a Customer with Id
//     app.put('/api/empdocs/:empdocId', empdocs.update);
 
// //     // // Delete a Customer with Id
//     app.delete('/api/empdocs/:empdocId', empdocs.delete);
};
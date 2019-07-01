module.exports = function(app) {
    var Customer = app.models.Customer;
    

    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
 
  
    // define a custom scope
    
    app.dataSources.mongoDs.automigrate('Customer', function(err) {
      if (err) throw err;
  
      
        //create Customer
        Customer.findOrCreate( {where: {email: "admin2@admin.com"}},        
        {firstName: 'Admin2', email: "admin2@admin.com", password: "admin" }, 
              function(err, instance) {
            if (err) return console.error(err);
            console.log('Customer created: ', instance);

          //create the admin role
    Role.findOrCreate({where: {name: 'admin2'}},{
        name: 'admin2'
      }, function(err, role) {
        if (err) throw err;
  
        console.log('Created role:', role);
  
        //make bob an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: instance.id
        }, function(err, principal) {
          if (err) throw err;
  
          console.log('Created principal:', principal);
        });
      });
    });
      });
    };

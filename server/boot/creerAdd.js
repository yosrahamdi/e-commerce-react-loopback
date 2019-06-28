module.exports = function(app) {

  var Customer = app.models.Customer;


  app.dataSources.mongoDs.automigrate('Customer', function(err) {
    if (err) throw err;

    var customer2s = [
      {firstName: 'Customer E', email: "testE@test.com", password: "eeee" },
      {firstName: 'Customer F', email: "testF@test.com", password: "ffff"},
      {firstName: 'Customer G', email: "testG@test.com", password: "gggg"},
      {firstName: 'Customer H', email: "testH@test.com", password: "hhhh"}
      ];
    var Address = [
      {
        state: "tunisia"
        
      },
      {
        state: "france"
        
      },
      {
        state: "egypt"
        
      },
      {
        state: "allemange"
        
      },
      {
        state: "italie"
      }
    ];
  
    Customer.create(customer2s[0], function(err, instance) {
      if (err) return console.error(err);
      console.log('Customer created: ', instance);
      instance.address.create(Address[0], function(err, address) {
        console.log('Address:', address);
        console.log('Customer with address:', instance);
      });
      });
    });
};
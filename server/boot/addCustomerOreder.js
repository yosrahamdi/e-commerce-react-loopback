module.exports = function(app) {
    var Customer = app.models.Customer;
    var Order = app.models.Order;
  
    // define a custom scope
    
    app.dataSources.mongoDs.automigrate('Customer', function(err) {
      if (err) throw err;
  
      var customers = [
        {firstName: 'Customer A', email: "testA@test.com", password: "aaaa" },
        {firstName: 'Customer B', email: "testB@test.com", password: "bbbb"},
        {firstName: 'Customer C', email: "testC@test.com", password: "cccc"},
        {firstName: 'Customer D', email: "testD@test.com", password: "dddd"}
        ];
      var orders = [
        {
          Paid: false,  
          orderDate: '01-01-2015'
        },
        {
          Paid: false,
          orderDate: '02-01-2015'
        },
        {
          Paid: false,
          orderDate: '03-01-2015'
        },
        {
          Paid: false,
          orderDate: '04-01-2015'
        },
        {
          Paid: false,
          orderDate: '05-01-2015'
        }
      ];
  
      // Create customers and orders
      Customer.create(customers[0], function(err, instance) {
        if (err) return console.error(err);
        console.log('Customer created: ', instance);
        orders[0].customerId = instance.id;
        orders[1].customerId = instance.id;
        Order.create(orders[0], function(err, instance) {
          if (err) return console.error(err);
          console.log('Order created: ', instance);
        });
        Order.create(orders[1], function(err, instance) {
          if (err) return console.error(err);
          console.log('Order created: ', instance);
        });
      });
      Customer.create(customers[1], function(err, instance) {
        if (err) return console.error(err);
        console.log('Customer created: ', instance);
        orders[2].customerId = instance.id;
        Order.create(orders[2], function(err, instance) {
          if (err) return console.error(err);
          console.log('Order created: ', instance);
        });
      });
      Customer.create(customers[2], function(err, instance) {
        if (err) return console.error(err);
        console.log('Customer created: ', instance);
        orders[3].customerId = instance.id;
        Order.create(orders[3], function(err, instance) {
          if (err) return console.error(err);
          console.log('Order created: ', instance);
        });
      });
      Customer.create(customers[3], function(err, instance) {
        if (err) return console.error(err);
        console.log('Customer created: ', instance);
        instance.orders.create(orders[4], function(err, instance) {
          if (err) return console.error(err);
          console.log('Order created: ', instance);
        });
      });
    });
  };
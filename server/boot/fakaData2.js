//   var faker = require("faker");

//   module.exports = function(app) {
//       var Customer = app.models.Customer;
//       var Category = app.models.Category;
//       var Product = app.models.Product;
//       var Supplier = app.models.Supplier;
//       var SubCategory = app.models.SubCategory;
//       var Order = app.models.Order;
    
//       var customerData = [];
//       for(var i=0; i < 100; i++ ) {
           
//        customerData.push({
//           firstName: faker.name.firstName(), 
//           lastName: faker.name.lastName(),  
//           phone: faker.phone.phoneNumber(),
//           birthDate: faker.date.past(),
//           email: faker.internet.email(),
//           password: faker.name.findName()
//       });
//       }
    
    
//       var categoryData = [];
//       for(var i=0; i < 100; i++ ) {
//          categoryData.push({
//            categoryName: faker.random.word(), 
//            Description: faker.lorem.sentence()
//          });
//        }

    
//       var productData = [];
//       for(var i=0; i < 100; i++ ) {
//          productData.push({
//            productName: faker.lorem.words(), 
//            productDescription: faker.lorem.sentence(), 
//            quantity: faker.random.number(),
//            price: faker.commerce.price(),
//            picture: faker.image.fashion(),
//            rating: faker.random.number(10)
//          });
//       }

//       var supplierData = [];
//       for(var i=0; i < 100; i++ ) {
//        supplierData.push({
//          companyName: faker.company.companyName(), 
//          contactFName: faker.name.firstName(), 
//          contactLName: faker.name.lastName(), 
//          address: faker.address.streetName(),
//          Phone: faker.phone.phoneNumberFormat(),
//          Email: faker.internet.email()
//        });
//      }

//      var subCategoryData = [];
//      for(var i=0; i < 100; i++ ) {
//         subCategoryData.push({
//           subCategoryName: faker.random.word(), 
//           Description: faker.lorem.sentence()
//         });
//       }

//       var orderData = [];
//       for(var i=0; i < 100; i++ ) {
//         orderData.push({
//           orderNumber: faker.random.number(), 
//           orderDate: faker.date.recent(),
//           shipDate: faker.date.future(),
//           Paid: false,
//           quantity: 0,
//           totalPrice: 0
//         });
//       }



//   const f1 =  customerData.map( async instance => 
//       { let trait1 = await Customer.create( instance ) 
        
//       return (trait1) 
//       })    

//   const p1 = Promise.all(f1)

//   const f2 =  categoryData.map(async categ => 
//       {let trait2 = await Category.create( categ  ) 
//       return (trait2)
//   })
//   const p2 =  Promise.all(f2)

//   const f3 = productData.map(async prod => 
//       {
//           let trait3 = await Product.create(prod)
//           return (trait3)
//       })
//       const p3 = Promise.all(f3)


//   const f4 = supplierData.map(async supp =>
//       {
//           let trait4 = await Supplier.create(supp)
//           return (trait4)
//       })
//       const p4 = Promise.all(f4)


//   const f5 = subCategoryData.map(async subc =>
//       {
//           let trait5 = await SubCategory.create(subc)
//           return (trait5)
//       })
//       const p5 = Promise.all(f5)


//   const f6 = orderData.map(async order =>
//       {
//           let trait6 = await Order.create(order)
//           return (trait6)
//       })
//       const p6 = Promise.all(f6)



//   Promise.all([p1, p2, p3, p4, p5, p6])
//       .then(res => {
//           console.log('Array of results', res)
//         })
//         .catch(err => {
//           console.error(err)
//         })

 

//       }





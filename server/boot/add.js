// var faker = require("faker");

// module.exports = function(app) {
//   var models = app.models();
//   const promises = [];


//   // var r = function(x,y) {
//   //   for (yy in y){
//   //     if (yy == "id") console.log("id");
//   //     else {
//   //       console.log(x.yy.content);
//   //       var d =  x.yy.content;
//   //     }
//   //   return d;
//   // }
//   // };

//   models.map( function(Model) {
      
//     if ( Model.modelName == "User" || Model.modelName == "AccessToken" || Model.modelName == "ACL" || Model.modelName == "RoleMapping" || Model.modelName == "Role") 
//           console.log("nothing") ;
          

//     else{ 
//        var obj = JSON.stringify(Model.definition);
//        console.log(obj);
//        console.log("***************************************************************************************************");
//     //    var keys = Object.keys(obj);

//     //    var f = obj.map( async x => {
//     //              let trait = await Model.create( eval( r(x,keys) )) 
//     //               return (trait) })
//     //          promises.push(f); 
//     } 


//   });
       
  
  
//   // Promise.all(promises)
//   //       .then(res => {
//   //           console.log('Array of results', res)
//   //         })
//   //         .catch(err => {
//   //           console.error(err)
//   //         })


          
// };

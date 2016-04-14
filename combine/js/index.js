var friends = [{
    "id": 1,
    "name": "Ben",
    "weight": 60,
    "price": 100,
    "person_id": 2
}, {
    "id": 2,
    "name": "John",
    "weight": 80,
    "price": 200,
    "person_id": 1
}, {
    "id": 3,
    "name": "Allie",
    "weight": 90,
    "price": 300,
    "person_id": 3
}, {
    "id": 4,
    "name": "Chris",
    "weight": 80,
    "price": 400,
    "person_id": 5
},
{
    "id": 5,
    "name": "Peter",
    "weight": 80,
    "price": 400,
    "person_id": 5
}];

var presents = [{
    "id": 1,
    "name": "book"
}, {
    "id": 2,
    "name": "smartphone"
},
{
    "id": 5,
    "name": "Nothing at all"
}];

///Using native Array functions
//We can implement a simple join
// (left outer join in database terms) using native, i.e.,
// already existing Array functions as follows.
// The method presented here modifies the articles array
// in place by adding a new key-value-pair for brand.

friends.forEach(function(friend) {
  //The filter() method creates a new array with all elements that pass the test implemented by the provided function.

  var result = presents.filter(function (present) {
    return present.id === friend.person_id;
  })

// if we wanted to join more than one itme in the inner and outer array
  // innerArray.filter(function(innerArrayItem) {
  //     return innerArrayItem.idA === outerArrayItem.idA &&
  //         innerArrayItem.idB === outerArrayItem.idB;
  // });
  delete friend.person_id;  // delete the friend.person

  // console.log(friends)  // person = smartphone

  // console.log(result)  // this is array opnject
  friend.person = (result[0] !== undefined) ? result[0].name : null;


})

console.log(friends);

// First, we loop over each article, where we take its brand_id to look up the corresponding brand
// using the native filter function. Note that this function returns an array and we expect it to
// have only one element. In case there is no corresponding brand, result[0] will be undefined,
// and in order to prevent an error (something like result[0] is undefined), we use the ternary
// operator.
// Also, as we no longer need brand_id after the lookup has been done, we can safely delete it.
// If we want to join by more than one attribute, we can modify the filter function to achieve


// ############################################ Alternative method ################################

// function join(lookupTable, mainTable, lookupKey, mainKey, select) {
//     var l = lookupTable.length,
//         m = mainTable.length,
//         lookupIndex = [],
//         output = [];
//     for (var i = 0; i < l; i++) { // loop through l items
//         var row = lookupTable[i];
//         lookupIndex[row[lookupKey]] = row; // create an index for lookup table
//     }
//     for (var j = 0; j < m; j++) { // loop through m items
//         var y = mainTable[j];
//         var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
//         output.push(select(y, x)); // select only the columns you need
//     }
//     return output;
// };
//
// var result = join(presents, friends, "id", "person_id", function(friend, present) {
//     return {
//         id: friend.id,
//         name: friend.name,
//         weight: friend.weight,
//         price: friend.price,
//         present: (present !== undefined) ? present.name : null
//     };
// });
//
// console.log(result);



//

//
//  d3.csv("data/nestData.csv", function (error, expenses) {
//    console.log(expenses)
//
//     var expenseByName = d3.nest()
//                         .key(function (d) {  // key is now d.name: expensesByName is an array of objects. Each object has a key property - which is what we used as the grouping value using the key function. Here, we used the values associated with the name property as the key.
//                           return d.name;
//                         })
//                         .entries(expenses)
//
//
// }) // end of csv data readin
//

var object = { 'a': 1 }, { 'b': 2 }, { 'c': 3 };
var result = _.assign(object);
console.log(result)


// _.map([1, 2, 3], function(n) { return n * 3; });
// // → [3, 6, 9]

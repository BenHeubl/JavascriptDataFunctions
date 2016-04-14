var data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

var count = 0;

data.forEach(function (d) {
  count += 1; // counts how many array elements are there
})

console.log(count); /// 4

console.log(data.length); // using lenght as method


///To combat this confusion, it can be useful
/// to think of the data as immutable.
///Immutable data cannot be modified once created.
/// Immutable = unveränderbar

// Cloning
// To help with this issue of brittle transformations, lodash provides the clone function.
// This function takes an object and returns a copy of that object. That copy is now a separate data object that you can edit without effecting the original object.

var mydataObjects = {"name":"Carl", "age":"48", "salary":"12300"};

var copythisData = _.clone(mydataObjects);

copythisData.age = +copythisData.age;
copythisData.salary = +copythisData.salary;

// copys the data

console.log(copythisData);


// By default, the clone function will not copy over nested objects. Instead these nested objects are simply passed by referenced - meaning the original and the copy will still share them.

// var mydataObjects = {"name":"Saul", "stats":{"age":"55"}};
// var shallowCopy = _.clone(mydataObjects);
// shallowCopy.stats.age = +shallowCopy.stats.age;
// console.log(mydataObjects);


// To prevent this "feature", we can pass true as the second parameter to clone to indicate that the copy should be deep and copy nested objects as well.


var dataObject = {"name":"Saul", "stats":{"age":"55"}};
var deepCopy = _.clone(dataObject, true);  // pass in True  to indicate that the copy should be deep and copy nested objects as well.
deepCopy.stats.age = +deepCopy.stats.age;
console.log(dataObject); ///
console.log(deepCopy);  /// gives out 55 as a number



// JavaScript's map can be a very useful tool to implement this concept of a transformation on immutable data.

// map executes a function and creates another array from it

var smallData = data.map(function (d, i) {
  return {
    name: d.city.toUpperCase(),
    index: i + 1,
    rounded_area: Math.round(d.land_area)
  }
});

// see how it has changed the data
console.log(data[0]);
console.log(smallData[0]);


// Filtering
// Select a subset of the data using the built in filter
// method. This creates a new array of data
// (again see transformation talk above)
// with only the values that the callback function
// returns true for.

var large_land = data.filter(function(d) {
  return d.land_area > 200;
})

console.log(large_land)
console.log(JSON.stringify(large_land))


// sorting

var sorted = data.sort(function(a,b) {
  return b.population - a.population;
});
console.log(sorted)
console.log(JSON.stringify(sorted));


// use the reduce function: you can sum up shit

var Sum = data.reduce(function(sum, d) {
  return sum + (+d.population);
}, 0);

console.log(Sum);



/// adding weird strings to the object properties

var crazy = data.reduce(function(str, d, i) {

  var ending = (d.city === "new york") ? " is cool." : " sucks." ;
  console.log(ending)

  return str + " " + d.city + ending;
}, "");
console.log(crazy);



// Chainging - the grammer of data

var bigCities = data.filter(function(d) { return d.population > 500000; })
  .sort(function(a,b) { return a.population - b.population; })
  .map(function(d) { return d.city; });


console.log(bigCities);

d3.csv("data/data1.csv", function(error, data) {
  console.log(data[0]);
});


d3.csv("data/data1.csv", function(data) {
  data.forEach(function(d) {
    d.population = +d.population;
    d["land area"] = +d["land area"];
  });
  console.log(data[0]);
});



/// adding/creating and object inside each array

d3.csv("data/data1.csv", function(d) {
  return {
    city : d.city,
    state : d.state,
    population : +d.population,
    land_area : +d["land area"]
  };
}, function(data) {
  console.log(data[0]);
});


// read in piped text:
var psv = d3.dsv("|", "text/plain");


psv("data/animals_piped.txt", function(data) {
  console.log(data[1]);
});



/// read in json file:
d3.json("data/data.json", function (data) {
  console.log(data[1])
})



// 
// queue()
//    .defer(d3.csv, "data/data1.csv")
//    .await(makeChart);//only function name is needed
//
//
// function makeChart(error, data) {//first param is error and not data
//      console.log(error);
//      console.log("everything ran");
//     };
//
//
//
// queue()
//   .defer(d3.csv, "data/data1.csv")
//   .defer(d3.tsv, "data/animals_piped.txt")
//   .await(analyze);
//
// function analyze(error, cities, animals) {
//   if(error) { console.log(error); }
//
//   console.log(cities[0]);
//   console.log(animals[0]);
//   }

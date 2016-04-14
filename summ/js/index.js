var data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];


///Min & Max
var populatonMin = d3.min(data, function (d) {
  return +d.population;
})
console.log(populatonMin)

document.getElementById("output").innerHTML = populatonMin;


var maxfunc = d3.max(data, function(d) { return +d.population; });
console.log(maxfunc);


document.getElementById("output2").innerHTML = maxfunc;


var maxfunc = d3.extent(data, function(d) { return +d.population; });
console.log(maxfunc);
document.getElementById("output3").innerHTML = maxfunc;


var maxfunc = d3.mean(data, function(d) { return +d.population; });
console.log(maxfunc);
document.getElementById("output4").innerHTML = maxfunc;


var landMed = d3.median(data, function(d) { return d.population; });
console.log(landMed);
document.getElementById("output5").innerHTML = landMed;


var SDd = d3.deviation(data, function(d) { return d.population; });
console.log(SDd);
document.getElementById("output6").innerHTML = SDd;

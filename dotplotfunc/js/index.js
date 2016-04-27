/// loading data

// ################################# dotplot histogram ################

// var svg = d3.selectAll("body")
//             .append("svg")
//             .attr("width", 500)
//             .attr("height", 500)
//             .append("g")
//             .classed("groupG", true)
//
// var dataset = [2010, 2010, 2010, 2010, 2015, 2015, 2015, 2015, 2015, 2015];
//
// var uniques = dataset.filter(function (item, i, array) { return array.indexOf(item) === i; })
//
// // create filtered arrays
// console.log(uniques)
// console.log(uniques.length)
//
// svg.selectAll(".groupRow")
//               .data(dataset.filter(function (item, i, array) { return array.indexOf(item) === i; }))
//               .enter()
//               .append("g")
//               .classed("yeargroupX", true)
//               .selectAll(".rectsEach")
//               .data(dataset.filter())
//               .enter()
//               .append("rect")
//               .classed("rectsEach", true)
//               .attr("width", 10)
//               .attr("height", 10)
//               .attr("fill", 'black');




// // ################################# dotplot histogram ################
// /// text with nested selection
//
//
// d3.csv("data/dots.csv", function (error, datadot) {
//
//         // console.log(datadot)
//         console.log(JSON.stringify(datadot))
//
//
//         var arrayForplotting = d3.nest()
//                                  .key(function (d) {return d.year;})
//                                  .entries(datadot)
//
//         console.log(JSON.stringify(arrayForplotting))
//
//
//         var verticalPostion = d3.nest()
//                                       .key(function(d) { return d.year; })
//                                       // .map(datadot);
//                                       .entries(datadot)
//
//         // console.log(JSON.stringify(verticalPostion))
//
//
//         var svg = d3.selectAll("body")
//                     .append("svg")
//                     .attr("width", 500)
//                     .attr("height", 500)
//                     .append("g")
//                     .classed("groupG", true)
//
//
// var scalex = d3.scale.linear().domain([2000, 2015]).range([50, 300]); // scales for x
// var scaley = d3.scale.linear().domain([20, 0]).range([0, 300]); // scales for y
//
//           svg.selectAll(".nItem") // caling it nItem
//                         .data(datadot)
//                         .enter()
//                         .append("rect")
//                         .classed("nItem", true)
//                         .attr({
//                             x: function(d) { return scalex(+d.year); },  // x postion just after year attribute
//                             y: function(d) {
//
//                               // console.log(arrayForplotting.find(function(element) {
//                               //   console.log(element.key)
//                               //   return element.key === d.year;
//                               // }).values)
//
//                               return scaley(arrayForplotting.find(function(element) {
//                                 console.log(element.key)
//                                 console.log(d)
//                               return element.key === d.year;
//                             }).values.indexOf(d)); }
//                         } )
//
//
// // find -  The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned.
// // value
// // indexOf - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//
//
//
//                         .attr("width", 10)
//                         .attr("height", 10)
//                         .attr({
//                           rx: 1,
//                           ry: 1,
//                           fill: "steelblue"
//                         })
//                         .on("mouseover", function (d, i) {
//                           // console.log(d.numbers)
//                         });
//                       });



// ################################# dotplot histogram ################
/// with death penalty data


d3.csv("data/exec.csv", function (error, datadot) {

        // console.log(datadot)
        // console.log(JSON.stringify(datadot))


        var arrayForplotting = d3.nest()
                                 .key(function (d) {return d.year;})
                                 .entries(datadot)

        // console.log(JSON.stringify(arrayForplotting))



        var svg = d3.selectAll("body")
                    .append("svg")
                    .attr("width", 500)
                    .attr("height", 500)
                    .append("g")
                    .classed("groupG", true)


var scalex = d3.scale.linear().domain([2000, 2015]).range([200, 300]); // scales for x
var scaley = d3.scale.linear().domain([100, 0]).range([0, 500]); // scales for y

          svg.selectAll(".nItem") // caling it nItem
                        .data(datadot)
                        .enter()
                        .append("rect")
                        .classed("nItem", true)
                        .attr({
                            x: 0,  // x postion just after year attribute
                            y: function(d) {
                              return (scaley(arrayForplotting.find(function(element) {
                              return element.key === d.year;
                            }).values.indexOf(d))); }
                        })
                        .attr("width", 4)
                        .attr("height", 4)
                        .attr({
                          rx: 0,
                          ry: 0,
                          fill: "#fff"
                        })
                        .on("mouseover", function (d, i) {
                          console.log(d.year)
                        });



            svg.selectAll(".nItem")
                            .transition()
                            // .delay(2000)
                            .duration( function (d) {
                              return (d.year.substring(2, 3)) * 300;
                            })
                            .attr({
                            rx: 1,
                            ry: 1,
                            fill: function (d) { if (d.Method === "Firing Squad") {return "#5ab4ac" }
                             else if (d.Method === "Gas Chamber") { return "streetblue"}
                             else if (d.Method === "Electrocution") { return "black"}
                             else if (d.Method === "Lethal Injection") { return "#ef8a62" }
                             else { return "grey"}
                           }
                          })
                          .attr({
                              x: function(d) { return scalex(+d.year); },  // x postion just after year attribute
                              y: function(d) {
                                return (scaley(arrayForplotting.find(function(element) {
                                return element.key === d.year;
                              }).values.indexOf(d))); }
                          } )



                      });






















// // making groups of data inside javascript
//
//
//  d3.csv("data/nestData.csv", function (error, expenses) {
//    console.log(expenses)
//
// // nesting function d3
//     var expenseByName = d3.nest()
//                         .key(function (d) {  // key is now d.name: expensesByName is an array of objects. Each object has a key property - which is what we used as the grouping value using the key function. Here, we used the values associated with the name property as the key.
//                           return d.name;
//                         })
//                         .entries(expenses)
//
//     console.log(expenseByName)
//     console.log(expenseByName[0].values[0].amount)  // jim
//
// // expensesByName is an array of objects. Each object has a key property - which is what we used as the grouping value using the key function.
// // Here, we used the values associated with the name property as the key.
//
// //The values property of these entries is an array containing all the original data objects that had that key.
//
// // ############ Summarizing Groups  - use d3 rollup ############
// // With rollup, you provide a function that takes the array of values for each group and it produces a value based on that array.
// // This provides for some very flexible group by functionality.
//
//
// var expenseCount = d3.nest()
//                      .key(function (d) { return d.name})
//                      .rollup(function (t) { return t.length})
//                      .entries(expenses)
//
// /// counts the items with the same name  - groups them basically
//
//                      console.log(expenseCount)
//                      console.log(JSON.stringify(expenseCount));
// // The individual records are gone (for better or worse)
// // and in their place are the values returned by our rollup function.
// // The naming stays the same (key and values) but the content is yours to specify.
// //Note that the value passed into the rollup callback is the array of values for that key.
//
//
//
//
// // another rollup example
//
// var expensesAvgAmount = d3.nest()
//                                 .key(function(d) { return d.name; })
//                                 .rollup(function(v) { return d3.mean(v, function(d) { return d.amount; }); })
//                                 .entries(expenses);
//
//
//                       console.log(JSON.stringify(expensesAvgAmount));
//
//
// // continue here with  " pretty cool rigth .. http://learnjsdata.com/group_data.html
//
// var expensemetrics = d3.nest()
//                         .key( function (d) { return d.name})
//                         .rollup( function (v) { return {  // return an object
//                           count: v.length,
//                           total: d3.sum(v, function (d) {return d.amount}),
//                           avg: d3.mean(v, function (d) { return d.amount})
//                           };
//
//                         })
//                         .entries(expenses)
//
//
//   document.getElementById('id1').innerHTML = expensemetrics[0].values.count;
//   document.getElementById('id2').innerHTML = expensemetrics[1].values.total;
//   document.getElementById('id3').innerHTML = expensemetrics[2].values.avg;
//
//
// console.log(JSON.stringify(expensemetrics));
// console.log(expensemetrics[1].values)
//
//
//
//
//
//
// // ############ CDC - Death Data per state ###############
// // Lets try it with a new dataset:
//
// // d3.csv("data/datafinal1.csv", function (error, datafinal) {
// //
// // console.log(datafinal)
// //
// // // var expensemetrics = d3.nest()
// // //                         .key( function (d) { return d.name})
// // //                         .rollup( function (v) { return {  // return an object
// // //                           count: v.length,
// // //                           total: d3.sum(v, function (d) {return d.amount}),
// // //                           avg: d3.mean(v, function (d) { return d.amount})
// // //                           };
// // //
// // //                         })
// // //                         .entries(expenses)
// // //
// // // console.log(JSON.stringify(expensemetrics));
// //
// //  }) // end of csv data readin
//
//
//
// // ############ Output object directly #########
// // The array output can be useful for using map or forEach as discussed
// // in the iteration and summation task.
// // But you can also have d3.nest return an object (or d3.map)
// // of the results, for direct access. Note the use of nest.map below.
//
// var expensesTotal = d3.nest()
//                       .key(function (d) {return d.name})
//                       .rollup(function(v) {
//                         return d3.sum(v, function(d) { return d.amount; });
//                       })
//                       .map(expenses)
//
// /// The JSON.stringify() method converts a JavaScript value to a JSON string,
// // optionally replacing values if a replacer function is specified,
// // or optionally including only the specified properties if a replacer array is specified.
// console.log(JSON.stringify(expensesTotal))
// console.log(JSON.stringify(expensesTotal.jim)) // = 79
//
// console.log("this is a JSON date: " + JSON.stringify(new Date(2016, 0, 2, 15, 4, 5)))
//
//
// /// ##### Nesting with mutible levels #######
// /// add more keys and we can subdevide the data even further
// var dataFromCSV = d3.nest()
//                     .key(function (d) {return d.name; })
//                     .key(function (d) {return d.date; })
//                     .rollup(function (v) {return d3.sum(v, function (d) {return d.amount; })
//                     })
//                     .map(expenses)
//
// console.log("Nesting with mutible levels:   " + JSON.stringify(dataFromCSV))
//
// /// multilevel nesting allows to have keys and then subkeys
// // that further can group data inside of a group
//
// /// ##### now reverse the order of the grouping ###
// /// first grouping by date, then name
// var dataFromCSV2 = d3.nest()
//   .key(function(d) { return d.date; })
//   .key(function(d) { return d.name; })
//   .rollup(function(v) { return d3.sum(v, function(d) { return d.amount; }); })
//   .map(expenses);
// console.log("Reverse nesting order:   " + JSON.stringify(dataFromCSV2));
// console.log("Access:   " + JSON.stringify(dataFromCSV2["11/12/15"].jim)); //34
//
// //// ############## group on derived or on-the-fly keys: ###
// /// lets find totals for all expenses for each year - this includes basic string manipulation
// // on the data string
// var stringmanipulation = d3.nest()
//                           .key(function (d) { return "20" + d.date.split("/")[2]; })  // The split() method splits a String object into an array of strings by separating the string into substrings.
//                           .rollup(function (v) { return d3.sum(v, function (d) {return d.amount; })})
//                           .map(expenses)
//
//                           // string manipulation with split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//
// console.log("String manipulation for the Key:   " + JSON.stringify(stringmanipulation))
//
//
//
//
//
//
//
//
// }) // end of csv data readin

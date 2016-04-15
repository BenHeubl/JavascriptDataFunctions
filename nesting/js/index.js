// making groups of data inside javascript


 d3.csv("data/nestData.csv", function (error, expenses) {
   console.log(expenses)

// nesting function d3
    var expenseByName = d3.nest()
                        .key(function (d) {
                          return d.name;
                        })
                        .entries(expenses)

    console.log(expenseByName)
    console.log(expenseByName[0].values[0].amount)  // jim

// expensesByName is an array of objects. Each object has a key property - which is what we used as the grouping value using the key function.
// Here, we used the values associated with the name property as the key.

//The values property of these entries is an array containing all the original data objects that had that key.

// ############ Summarizing Groups  - use d3 rollup ############
// With rollup, you provide a function that takes the array of values for each group and it produces a value based on that array.
// This provides for some very flexible group by functionality.


var expenseCount = d3.nest()
                     .key(function (d) { return d.name})
                     .rollup(function (t) { return t.length})
                     .entries(expenses)

/// counts the items with the same name  - groups them basically

                     console.log(expenseCount)
                     console.log(JSON.stringify(expenseCount));
// The individual records are gone (for better or worse)
// and in their place are the values returned by our rollup function.
// The naming stays the same (key and values) but the content is yours to specify.
//Note that the value passed into the rollup callback is the array of values for that key.




// another rollup example

var expensesAvgAmount = d3.nest()
                                .key(function(d) { return d.name; })
                                .rollup(function(v) { return d3.mean(v, function(d) { return d.amount; }); })
                                .entries(expenses);


                      console.log(JSON.stringify(expensesAvgAmount));
 })



// continue here with  " pretty cool rigth .. http://learnjsdata.com/group_data.html

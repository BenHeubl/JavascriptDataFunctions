// string manipulation

// characters in strings can be accessed via indexing
// this is like in arrays, 0 based index

var myname = "BenediktMaximilian"[8];
console.log(myname)
console.log(myname.length)
// M


// ######### use SLICE method #################
// slice is being used to extract sub-sections based on indexes.
var testSlice = "this Is The Economist".slice(1, 5)
console.log(testSlice)


// looping thru a string, returning different outputs

var myString = "Ben";
for (var i = 0; i < myString.length; i++) {
  console.log(myString.slice(i, myString.length))
}

// IMPORTANT: The sliced string goes up to - but not including - the last index.


// BenediktMaximilian
// index.js:22 enediktMaximilian
// index.js:22 nediktMaximilian
// ...
// index.js:22 lian
// index.js:22 ian
// index.js:22 an
// index.js:22 n


// ######## string concatination ############

var num = 8;
console.log("this is your number:  " + (num + 10) + " you butt.");

// string documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// ########### string helper methods: ##########

// ###############################################################################
// String.prototype.repeat()
// Returns a string consisting of the elements of the object repeated the given times.
var stringg = "this is a string";
console.log(stringg.repeat(3))
// this is a stringthis is a stringthis is a string
// ###############################################################################


// ###############################################################################
// String.prototype.replace()
// Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
var stringg2 = "this is a String";
var replacedString = stringg2.replace(" is", "isNot")
var replacedStringRegEx = stringg2.replace(/string/i, "butt")
// use regualr experssion only if you loop over an array of strings, find the patterns and replace it then and there
console.log(replacedString)
console.log(replacedStringRegEx)
// regex cheat sheet: https://www.debuggex.com/cheatsheet/regex/javascript
// more: http://www.javascriptkit.com/javatutors/re.shtml
// ###############################################################################



// ###############################################################################
// String.prototype.search()
// Executes the search for a match between a regular expression and a specified string.

// ###############################################################################


// ###############################################################################
// String.prototype.slice()
// Extracts a section of a string and returns a new string.

// ###############################################################################


// ###############################################################################
// String.prototype.split()
// Splits a String object into an array of strings by separating the string into substrings.

// ###############################################################################


// ###############################################################################
// String.prototype.startsWith()
// Determines whether a string begins with the characters of another string.

// ###############################################################################

// ###############################################################################
// String.prototype.substr()
// Returns the characters in a string beginning at the specified location through the specified number of characters.


// ###############################################################################

// ###############################################################################
// String.prototype.substring()
// Returns the characters in a string between two indexes into the string.


// ###############################################################################

// ###############################################################################
// String.prototype.toLocaleLowerCase()
// The characters within a string are converted to lower case while respecting the current locale. For most languages, this will return the same as toLowerCase().


// ###############################################################################

// ###############################################################################
// String.prototype.toLocaleUpperCase()
// The characters within a string are converted to upper case while respecting the current locale. For most languages, this will return the same as toUpperCase().

// ###############################################################################


// ###############################################################################
// String.prototype.toLowerCase()
// Returns the calling string value converted to lower case.


// ###############################################################################

// ###############################################################################
// String.prototype.toSource()
// Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method.


// ###############################################################################

// ###############################################################################
// String.prototype.toString()
// Returns a string representing the specified object. Overrides the Object.prototype.toString() method.


// ###############################################################################

// ###############################################################################
// String.prototype.toUpperCase()
// Returns the calling string value converted to uppercase.


// ###############################################################################

// ###############################################################################
// String.prototype.trim()
// Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.


// ###############################################################################

// ###############################################################################
// String.prototype.trimLeft()
// Trims whitespace from the left side of the string.


// ###############################################################################

// ###############################################################################
// String.prototype.trimRight()
// Trims whitespace from the right side of the string.


// ###############################################################################

// ###############################################################################
// String.prototype.valueOf()
// Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.


// ###############################################################################









// ################ Whitespaces ##############
// in order to strip the Whitespaces, we will remap the entire dataset
// TRIM: Lodash's trim can help. It removes that unsightly whitespace from the front and back of your strings.
d3.csv("data/white.csv", function(data) {
  console.log(JSON.stringify(data));


  // D3 provides several operators for converting associative arrays to standard indexed arrays.
  // # d3.keys(object)
  // The forEach() method executes a provided function once per array element.

// var cleanData;

  var polished = data.map(function (d) {
    console.log(d)
    var cleanData = {};  // empty object, where we will push our data into
    d3.keys(d).forEach(function (k) {
      console.log(k)
   // function is being invoked on each key, key is the propery name, now with K we can do something
      cleanData[_.trim(k)] = _.trim(d[k]);  // use lodahs trim function
    })
    return cleanData;
  })


  console.log(JSON.stringify(polished))


}) // end of csv data readin


// ################# LODASH #################################
// full documentaiton for Lodash sting manipulation: https://lodash.com/docs#camelCase
var myBenString = "   this is Ben       ";
console.log(_.trim(myBenString));

console.log(_.trim('-_-skdhvkdbkjsdbv-_-', '_-'));

// map over array, and trim elements for whitespaces
console.log(_.map(['  foo  ', '  bar  '], _.trim));


// ########## replacing strings with find and Destroy - Metalica :-)

// #### use indexOf to perform this searching.
// You pass it a sub-string, and it'll tell you the location in string you are calling
// it where that sub-string starts. -1 is returned if the sub-string can't be found.

// build string finder:
// You can use this to build a little string finder, by comparing the return value to -1.

console.log("hi Ben, your are awesome".indexOf("Ben"))  // returns index of where "Ben" is
console.log("hi Ben, your are awesome".indexOf("Ben") !== -1)  // returns true
console.log("hi Ben, your are awesome".indexOf("Dog"))
console.log("hi Ben, your are awesome".indexOf("Dog") !== -1) // returns false


// ################## create a template for strings ###

// build string concatination for
// <div class="person">
//   <span class="name">Birdman</span>
//   <span class="occupation">Imaginary Super Hero</span>
// </div>

// var person = { name : "Birdman", occupation: "Imaginary Super Hero" };
// var html_snippet = "<div class=\"person\">" +   // use \"person\"> to insert the object into string
//   "<span class=\"name\">" + person.name + "</span>" +
//   "<span class=\"occupation\">" + person.occupation + "</span>" +
// "</div>";
// console.log(html_snippet);


/// simplyfy the process:
// use lodash templates to define a "template" that you can reuse with different data.
// from example above:

var firstexample = { name : "Birdman", occupation: "Imaginary Super Hero" };
var seccondexample = { name : "Ben. Ben Heubl", occupation: "Husben" };

var templateString = "<div class='person'>" +
  "  <span class='name'><%= name %></span>" +
  "  <span class='occupation'><%= occupation %></span>" +
  "</div>";

var templatefunction = _.template(templateString);

console.log(templatefunction(firstexample))
console.log(templatefunction(seccondexample))

document.getElementById('container').innerHTML = templatefunction(firstexample)
document.getElementById('container2').innerHTML = templatefunction(seccondexample)








// end

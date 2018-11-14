// Create an array
// Create empty array
var myArr = new Array()

// preffered way
var myArr2 = []

// create an array of a certain size
var myBigArr = new Array(100)
var myBigArr2 = [,,,,]
var myBigArr2 = [1, 2, 3, 4, 4]

var array = []
array.length = 8

// Gives us the size of the array
array.length

// Position of items in the array
// index
var superArr = ['rock', 'paper', 'scissors']
// 0 base, starts at 0 and goes up from there
superArr[1]

// insert in the array
var supArr = []

supArr.push("yeet", "Stan Lee", "Spiderman", 1, 420, 42, 69)

// will add items to beginning of array
supArr.unshift(4, 5, true)

// remove

//mutable vs immutable
// mutable are items that can be changed
// immutable are items that can't be changed
var sArr = [1, 2, 3]

// removes the last element of the array and returns it, mutable
sArr.pop

// removes the first element of the array and returns it, mutable
sArr.shift

// mutable
delete sArr[2]

// immutable
sArr.slice(2)


// iterate, (going through an array) or loops
var nums = [1, 2, 3, 4, 5]

// forEach
nums.forEach(function(num, index){
  console.log("index of : " + index + "values: " + num)
})

// map
nums.map(function(num, index){
  console.log(++num)
})

// filter
nums.filter(function(num, index){
  console.log(num % 2 == 0)
})

 ['s', 23, 23.2, true, false].filter(boolean)

 // for 
 for (var index = 0; index < nums.length; index++){
   console.log(nums[index])
 }

// type checking
// checks for what datatype is something?
typeof []
typeof 0
typeof true

// misc functions
var lastArr = ["rock", "green", "blue"]

// returns a string of what the array looks like
lastArr.toString

// brings together 2 values
lastArr.join()

// reverses the array
lastArr.reverse

// put the items in order, numbers least to greatest, strings it'll do it alphabetically
lastArr.sort()

// search the array
lastArr.find()

// tell the index of the value
lastArr.indexOf()

// gives a boolean on if the array includes the value
lastArr.includes()

// combine arrays
lastArr.concat()


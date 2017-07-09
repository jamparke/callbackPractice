/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the sayHi function that makes the code above work,

   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });

*/


// 1. Write a function called first that returns the first item of the array using a callback function

  // Code Here




function first(arr, holder) {
  var firstName = arr[0];

    return holder(firstName);
  }

function second(firstName){
    console.log('The first name in names is ' + firstName)
  }


/*second(lastName, function1)

/*function getThatName(callback) {
  var getName = names[0];
  callback(getName);
}*/

  /*return "firstname";
}
function getname(callback, arr) {
  var firstname = names[0]
}*/

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, second);



// 2. Write a function called last which returns the last item of the array using a callback function.

  //Code Here


function last(a,cb) {
  return cb(a[a.length -1]);

}
last(names, function(lastName) {
  console.log('The last name in names is ' + lastName);
});






// 3. Write a function called multiply that multiplies two numbers using a callback function.

  //Code Here

function multiply(a,b, cb) {
  return cb(a*b)
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that checks if a name exists in an array.
// If it does, return true using the callback, if not return false.

  //Code Here


  /*if (yourArray.indexOf("someString") > -1) {
      //In the array!
  } else {
      //Not in the array
  }
*/

function contains(a, b, cb) {
    return cb(a.includes(b));
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes the names array and removes all duplicates and returns
// the callback function with the array of unique names.

    //Code Here
/*function uniq(arr, cb) {
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  var unique=true;
  for (var j = 0; j < arr2.length; j++) {
    if (arr[i]===arr2[j]) {
          unique=false;
    }
}
  if (unique) {
    arr2.push(arr[i]);

  }
cb(arr2);
}
*/
function uniq(arr, cb) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    var unique=true;
    for (var j = 0; j < arr2.length; j++) {
      if(arr[i]===arr2[j]){
        unique=false;
      }
    }
    if(unique){
      arr2.push(arr[i]);
    }
  }
cb(arr2);
}


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// 6. Write a function called each that takes in an array of names. For each item, use a callback
// function to return the indices and item.

    //Code Here
var each = function(a, cb){
  a.forEach(function(input, i) {
        cb(a[i], i);
  })
}


each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID
// and returns that user.

 //Code Here


var getUserById = function(a, b, cb){
  var found = false;
  for(var obj in a){
    if (a[obj].id === b){
      return cb(a[obj]);
    }
  }
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});

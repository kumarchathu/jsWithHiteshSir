const studentName = "chathu";
//const studentName = "rama";// // get error because this is  block-scoped
var courseName = "javaScript"; //var also not recomended because one define courseName then another time also       possible to defined again;
var courseName = "c++"; // not get Error --> bymistake  defined asme name not get error, just consider last decleration only
let emailId = "kumar@gmai.com";
//let emailId = "kumar@gmai.com";// get error because this is  block-scoped
studentCity = "Surat"; // this is not recomended
studentCity = "Bhopla"; // not get error this is just like var
let state; // default value is undefined

console.log(studentName);
console.log(courseName);
console.log(emailId);
console.log(studentCity);
console.log(state); // undefined

/*OUTPUT
-------------
chathu
javaScript
kumar@gmai.com
Surat
undefined
*/
// studentName = "rama"; //get Error
/*
studentName = "rama";
            ^
TypeError: Assignment to constant variable.
*/
courseName = "java";
emailId = "kumararama@gmai.com";
studentCity = "Bangalore";

console.log("--------------------------");
console.log(studentName);
console.log(courseName);
console.log(emailId);
console.log(studentCity);
/*OUTPUT
-----------
chathu
java
kumararama@gmai.com
Bangalore
*/
console.log("-----------------------------------------------------------");
console.table([studentName, courseName, emailId, studentCity, state]);
/*OUTPUT
----------------
┌─────────┬───────────────────────┐
│ (index) │        Values         │
├─────────┼───────────────────────┤
│    0    │       'chathu'        │
│    1    │        'java'         │
│    2    │ 'kumararama@gmai.com' │
│    3    │      'Bangalore'      │
│    4    │       undefined       │
└─────────┴───────────────────────┘
*/
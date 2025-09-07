//1. extract a string from a given string <s>
//   starting from character at position <i> and getting <n> characters.
s = 'thisisastring';
i = 7;
n = 3;
console.log(s.substring(i,i + n));
 
//2. get the position of the first occurrence of a given string <t> in a given string <s>.
var s ='sky is blue';
var t = 'is blue';
console.log(s.indexOf(t));
 
//3. convert a given string <s> into another string so that all characters
//   from position <i> (inclusive) to position <j> (exclusive) of string <s>
//   become uppercase characters.
 var s = 'this is a very very long string ';
 var i = 5;
 var j = 7;
console.log(s.substring(0, i) + s.substring(i, j).toUpperCase() + s.substring(j));
 
//4. given an array <a>, remove all elements from position <i> (inclusive)
//   to position <j> (exclusive).
var a = ['a', 'b', 'c', 'd', 'e'];
var i = 2;
var j = 4;
a.splice(i,( j - i));
console.log(a);

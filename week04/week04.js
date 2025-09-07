const studentScore = [
    { name : 'Alice', score : 85},
    { name : 'Bob', score : 92},
    { name : 'Charlie' , score : 68},
    { name : 'David' , score : 55},
    { name : 'Eve' , score : 78},
]
//1
const passingNames = getPassingNames(studentScore)
function getPassingNames(name){
    return name.filter(name => name.score >= 70).map(name => name.name)
}
getPassingNames(studentScore)
console.log(passingNames)
//2
console.log('mangoteen'.includes('go')) //true
//3
console.log(['mangoteen','mango'].includes('go')) //false  หาแบบตรงๆตัวไปเลยว่ามีตัวนี้ไหม */ 
//4
const array = [1,30,4,21,10000]
array.sort((num1,num2) => num1 - num2);
console.log(array)
//5 
const students = [
    {id : 66500102 , name: 'suda', gpa:2.5},ปแ 
    {id : 66500555 , name: 'ada', gpa:2.8},
    {id : 66500589 , name: 'pornchai', gpa:3.25},
    {id : 66500104 , name: 'Pornsak', gpa:3.8},
]
students.sort((a,b) => { if (a.name.toLowerCase() < b.name.toLowerCase()) return -1; if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;})
console.log(students);
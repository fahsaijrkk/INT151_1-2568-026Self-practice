const employees = [
    {
      id: 'e1001',
      firstname: "Somchai",
      lastname: "Jaidee",
    },
    {
      id: 'e1002',
      firstname: "Pornchai",
      lastname: "Deejai",
    },
    {
      id: 'e1005',
      firstname: "Suda",
      lastname: "Rakdee",
    },
  ]
// output ['SOMCHAI JAIDEE","PORNCHAI DEEJAI"]
//1
const name1 = employees.map(employee => (employee.firstname + " " + employee.lastname).toUpperCase())
console.log(name1)
//2
let newwords = []
employees.forEach(employee => {if (employee.lastname.includes("jai")) {newwords.push(employee)}})
console.log(newwords);
//3
let newwords2 = [];
employees.forEach(emp => {
if (emp.lastname.includes("jai")) {
    newwords2.push((emp.firstname + " " + emp.lastname).toUpperCase());
  }
});
console.log(newwords2) 
//4
const carts = [
    {productId: 1002,price:10,amount: 5},
    {productId: 2005,price:100,amount: 2},
    {productId: 5001,price:5,amount: 4},
]
// net price = total price * vat7%
const totalPrice = carts.reduce((sum, item) => {  return sum + (item.price * item.amount)}, 0)  
 console.log("Total Price:", totalPrice)
   
  // VAT 7%
  const net= totalPrice * 1.07
  console.log("Net Price:", net.toFixed(2))
  
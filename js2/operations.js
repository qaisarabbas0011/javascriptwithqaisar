let val=3
let negVal=-val
console.log(negVal)
//output -3

//console.log(2+3)simply adds two numbers
//console.log(2-3)substracton
//console.log(2*3)multiplication
//console.log(2**3) ** using for power, which mean 2 with power 3
//console.log(2/3) division
//console.log(2%3) reminder
// these are basic operations of mathematics

let str1="Qaisar"

let str2=" Abbas"// i give a one tab space for readablity while adding of two string
                // remember string are only add not sub mul or div....
let str3=str1 + str2

console.log(str3)
//output => Qaisar Abbas

/*
some string and number matchups


console.log("1"+2)output=>12 'cuz node.js treate whole thing as string


its for you tell me the output of this:

console.log("1"+2+2)output=?

hint in earlier step..

console.log(1+2+"3")output=> 33 why?

ans: firstly the interpreater come in first element of function 
and check, they found its a number the move in + sign they come to know 
oh this is an operator then move nexy element they found its a number also, move in other 
element which is opreator + , then they move they find a string
firstly they do:
1+2=3
then they read
+"3"
then it concante 3 number with "3" string
so,the required output is 33

its for you, tell me the output

console.log(1+2+4+"5")output=?

console.log("2"+3+3)output=>233 simply
'cuz interpreter found string firstly 
so they just concatnate the elements not add

*/
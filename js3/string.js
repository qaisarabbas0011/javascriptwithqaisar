const str="qaisar"
const str1=" abbas"
const str2="    ab    "
const url="https://google20%ghr/"

//console.log(str+str1);//old way of concatination
console.log(`Hello my name is ${str} and my second name is ${str1}`)//modern way

//*******************************************************************************

//*******************Functions in String******************************************

//key value access
console.log(str[0]);

//prototype

console.log(str1.__proto__);

// length

console.log(str.length)

//toUpperCase

console.log(str.toUpperCase())

//toLowerCase

console.log(str.toLocaleUpperCase())

//adding char

console.log(str.charAt(3))

//find postioning

console.log(str.indexOf('i'))

//substring
console.log("cut off string")
console.log(str1.substring(0,4))

//reversing string
console.log("reversing")
console.log(str.slice(-6,4))

//trim
console.log("removing blank space")
console.log(str2.trim())

//replace
console.log("removing 20% with -")
console.log(url.replace("20%","-"))


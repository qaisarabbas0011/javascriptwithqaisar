const marval_heroes=["Ironman","Thor","Spiderman"]

const dc_heroes=["Batman","Superman","Flash"]

//inapropriate way

// marval_heroes.push(dc_heroes)
// console.log(marval_heroes);

//other method 

const  allHeroes=marval_heroes.concat(dc_heroes)
console.log(allHeroes);


//spared method in array

const my_new_all_heroes=[...marval_heroes,...dc_heroes]

console.log(my_new_all_heroes);
//array inside array
const arr_arr=[1,2,3,[3,4,5,6],3,4,[3,6,7,[8,9,0]]]

const anotherarr=arr_arr.flat(Infinity)
console.log(arr_arr);

console.log(anotherarr);




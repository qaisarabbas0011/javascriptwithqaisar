//objects
/**
 objects have to nature
 
 SINGLETON:which have single point of excuation
 oftenly we called "constructor"
syntax =>
    create.object()
     OR
    const obj={}


 LITERALS:which is usable in code multiple times
suntax=>
    const obj=nwe object{
    key1:values,
    key2:values,
    .
    .
    keyn=values
} 
 */
console.log("OBJECT");
console.log("singleton object example below..")
const obj = new Object()
console.log(obj);


console.log("Literal object example below..");

const User={
    name:"qaisar",
    email:"abc@gamil.com",
    age:18,
    IsloggedIn:false,
}

console.log(User);
//picking specfic element from object

console.log(User.name);
// second method
console.log(User["name"]);

//let do some more in objects
const Sym=Symbol("key1")

const User1={
    [Sym]:"key1",
    name1:"Abbas",
    email1:"abc@yahoo.com"

}
console.log(User1);
//we use freez to freez some particular object
Object.freeze(User1)
// we use to freez an object to restrict manuilapation

//Use of singleton object

const LogInPage={}//singleton object

LogInPage.nam="abc123";
LogInPage.emil="anc@email";

console.log(LogInPage);

//NESTED OBJECTS

const RagulerUser={
    Email:"abc@gmail",
    fullname:{
        userfullname:{
            firstname:"Ali",
            lastname:"abbas"
        }
    }
}
console.log(RagulerUser.fullname.firstname);

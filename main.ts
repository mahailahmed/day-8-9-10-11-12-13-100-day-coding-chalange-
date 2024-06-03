//Day 09
//Q 25..Alien colour
let alien_variable="green"
if(alien_variable==="green"){

    console.log("you earn 5 points");
    
}else{
    console.log("no points earn")}
   
    //Q 26
    let variable_alain = "red"

    //run if block
    if(variable_alain==="red"){
   
       console.log( "player just earned 5 points for shooting the alien")
    }
    else{
   
       console.log( 'the player just earn 10 points')
       
        }
   
   //run else block
        variable_alain = "green"
        if(variable_alain==="red"){
       
           console.log( "player just earned 5 points for shooting the alien")
        }
        else{
       
           console.log( 'the player just earn 10 points')}
           
//Q27...//lien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// red alien 

let  variable_alien="red"
if(variable_alien==="red"){

console.log("you earn 5 points");


}else if(variable_alien=="green"){
    console.log(" you earn 10 points");
    
}
else if(variable_alien==="yellow"){
    console.log("you ern 15 points");
    
}
//green alien
  variable_alien="green"
if(variable_alien==="red"){

console.log("you earn 5 points");


}else if(variable_alien=="green"){
    console.log(" you earn 10 points");
    
}
else if(variable_alien==="yellow"){
    console.log("you ern 15 points");
    
}
// yellow alien
variable_alien="yellow"
if(variable_alien==="red"){

console.log("you earn 5 points");


}else if(variable_alien=="green"){
    console.log(" you earn 10 points");
    
}
else if(variable_alien==="yellow"){
    console.log("you ern 15 points");
    
}
//Day 10
//Q 28..Stage of life...
let age =25
if(age < 2){
console.log(" The person is a babay");
    }
    else if(age < 4){

console.log("The person is a toddler");

}
else if( age< 13 ){

    console.log("The person is a kid");
}
else if(age < 18){

    console.log(" The person is teenager");
    
}
else if( age< 25){
    console.log("The person is younger");
    
}
else if(age < 50){

    console.log(" The person is adult");
    
}else{
    console.log(" The person is adult");
    
}
//Q 29 favourite fruit
let favorite_fruit: string[] =["mango, banana, apple,grapes , water melon"]


if (`${favorite_fruit[0]}`==='mango'){
console.log('i like mango') 
}else {
    console.log("i dont like this fruit");  
}
if (`${favorite_fruit[1]}`==='banana'){

    console.log('i like banana') }
    else {
        console.log("i dont like this fruit");
         }
    if (`${favorite_fruit[2]}`==='apple'){

    console.log('i like apple') }
    else {
        console.log("i dont like this fruit");}
    
if (`${favorite_fruit[3]}`==='peach'){

    console.log('i like peach') 
 }else {
    console.log("i dont like this fruit");}

 if (`${favorite_fruit[4]}`==='papaya'){

    console.log('i like papaya') 
 }else {
    console.log("i dont like this fruit");
    
}
//Q 30 hellow admin..

let username1:string[]=["admin","user1","user2","user3","user4"]
username1.forEach(username=>{

if(username==="admin"){

    console.log("hellow admin, would you like to see a status report ?");
    
}
else{
    console.log(`hellow ${username} thank you for loging in agian`);
    
}})
//Day 11
// Q 31 no users
let username:string[]=[]
if(username.length===0){
    console.log(" we need to find some user !");
    
}else{
    console.log("we need to find some user printed");
    
}

 //Q 32 checking username..
 let current_users:string[]=["saba","ahmed","admin","baber","raza"]

let new_users:string[]=["fawad","hussain","users7","admin","users9"]

new_users.forEach((newUser)=>{
if(

current_users.some(
(current_users)=>current_users.toLowerCase()===newUser.toLocaleLowerCase()

)
){
   console.log(`${newUser}will need to enter a new username`);
   
}
else{
   console.log(`${newUser} is availble .`)
}
})

//Q 33
let myNumber =[1,2,3,4,5,6,7,8,9]
//for loop
for ( let i = 0; i< myNumber.length;i++){

if( myNumber[i]==1){

   console.log(`${myNumber[i]}st`);
} else if ( myNumber[i]==2 ){

   console.log(`${myNumber[i]}st`);
}else if ( myNumber[i]==3 ){

   console.log(`${myNumber[i]}rd`);

}else if ( myNumber [i] >= 4 && myNumber [i]<= 9){

   console.log(`${myNumber[i]}th`);
}
}

//Day 12
// Q 34 Pizzas
let pizas:string[]=["peproni","fajita","afghani","vegetable"]
pizas.forEach(pizas=>{
   console.log(`i like ${pizas} piza`);
   
})
console.log(" i really love piza !");

//Q 35Animals

 let animals :string[]=["dog","cat","rabit"]
 animals.forEach(animals=>
{
   console.log(`a ${animals} would make a great pet`);
})
 console.log("Any of these animals would make a great pet!");
 
 //Q 36 T-shirt
 let sizeofshirt:string[]=["sml","med","lrg"]
   let shirt1 =" This shirt is for casual wearing"
   let shirt2 =" This shirt is for  formal wearing"
   let shirt3 =" This shirt is for  party wearing"

   function make_tshirt(){
let simpleFunction=`This is a ${sizeofshirt[1]} shirt , and ${shirt1}`
console.log(simpleFunction)
return simpleFunction


   }
   let response=make_tshirt()
   console.log(response)

   
//day 13 
//Q 37 large shirt
let size : string[]=["medium","larg"]

let defaultmessage= "i love typescript"

let medium =(`size of shirt is: ${size[0]},${defaultmessage}`)

let larg =(`size of shirt is: ${size[1]},${defaultmessage}`)

let small =(`size of shirt issmall and i love painting`)

let extralarge = ( `size of shirt is small and i love hiking`)

function make_shirt(){
let simpleFunction=(small)
console.log(simpleFunction)
return simpleFunction

}
let responce = make_shirt()
console.log( responce);

//Q 38.cities
let  karachi =" is in pakistan"
let paris =" is in france "
let barcelona=" is in span"

function cal_city(city:string){
   console.log(city);
   
}
console.log(karachi);

//Q 39.City names
let lahore="lahore, pakistan"
   let istambol=" istambol,turkey"
   let delhi="delhi,india"
function city_country(country:string){
   console.log(country);
   
}
console.log(istambol);


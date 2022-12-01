var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let  fruit = 'apple';
console.log(fruit);

const fruits = () =>{
    if(true){
      var fruit1 ='apple22';//funcion scope
      let fruit2 ='apple11';//block scope
      const fruit3 ='apple33';
        }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

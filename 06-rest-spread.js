let kissEmoji = [..."π©ββ€οΈβπβπ©"]
console.log(kissEmoji)

let familyEmoji = [..."π¨βπ©βπ¦βπ¦"]
console.log(familyEmoji)


//Tiene sentido si lo piensas al final ambos objetos son una composiciΓ³n de otros objetos


// spread operator

let person =  {name: 'oscar', age:28 };
let country = 'ESP';

let data =  {...person, country};

console.log(data);

//rest
function sum(num, ...values){
console.log(values);
console.log(num + values[0]);
return num + values[0];
}

sum(1, 2, 3,);

export function solution(
    json1 = {
      name: 'Mr. Michi',
      food: 'Pescado',
    },
    json2 = {
      age: 12,
      color: 'Blanco',
    }
  ) {
    return { ...json1, ...json2 };
  }
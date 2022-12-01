//enhaced objects literals

function newUser(user, age, country){
    return{
        user,
        age,
        country,
    }


}

console.log(newUser("shencaNet", 35, "ESP"))

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.barking = function() { return `${this.name} says WOOF`}
}
const Kira = new Dog("Kira", 3)
Kira.barking();


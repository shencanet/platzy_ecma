function newUser(name, age, conutry){
    var name = name || 'santi';
    var age = age || 35;
    var country = country || 'ESP';
    
    console.log(name, age, country);

}

newUser();
newUser('Pedro', 15, 'CAT');

function newAdmin (name = 'Morata', age=35, country= 'HON'){
    console.log(name, age, country);
};
newAdmin();
newAdmin('gavi', 18, 'esp');
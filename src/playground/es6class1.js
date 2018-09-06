
class Person {
    //in case of object is istatiated with no name , name will be anonymous
    constructor(name = 'Anonymous', age = 0){ 
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hello ${this.name}`
    }

    getDescription(){
        return `Ele ${this.name} is ${this.age} !`;
    }


}

class Travler extends Person{
    constructor(name,age,location = 'no location'){
     super(name,age,);
        this.location = location;

    
    }
    getGretting(){
        let newGret = super.getGretting();
        newGret += `Hi ${this.name} , from ${this.location}`;
        return newGret;
    }
}



class Student extends Person {

    constructor(name,age,major = 'None'){
        super(name,age);
        this.major = major;
    }

}


const me = new Person('Ricardo Tosin',31);
const tr = new Travler('jonas', 22, 489421841)

console.log(me.getDescription());
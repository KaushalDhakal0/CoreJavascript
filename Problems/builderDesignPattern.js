function Address1(state,street, job){
    this.state = state;
    this.street = street;
    this.job = job;
        // return this;
}

const Kaushal = new Address1("XYZ",undefined,76426472);
console.log(++Kaushal.job);
console.log(typeof Address1);
console.log(this);


class Address{
   constructor(state,street,job){
    this.state = state;
    this.street = street;
    this.job = job;
   }
  speak(params){
    return this.job;
   }
    // return this;
}
const myAddress = new Address("HELLO",123423,"developer");
console.log(myAddress);

// class User {
//     constructor(name,age,address,mobileNumber,nationality,occupation){
//         this.name = name,
//         this.age = age,
//         this.address = address,
//         this.mobileNumber = mobileNumber,
//         this.nationality = nationality,
//         this.occupation = occupation
//     }
// }
// const Person  = new User("Karen",24,"ROLPA",987845878457,"Nepali","model");
// Person.personality =()=> {
//     for (let i = 0; i < 20; i++) {
//         console.log(i);
//     }
// }
// console.log(Person.personality());
// const Mike  = new User("Mike",64,"KTM",undefined,"African");
// console.log(Mike.age);
((str)=>{
    console.log(`SELF CALLING FUNCTION with params = = ${str}`);
})("CALL ME!!!!");


//Above Method is a bad way of using Classes.As we have to provide undefined to the paramaters that does not't exist;
//So, A betetr way would be using a Builder function that takes only one argument and write functions that adds property to it accorndingly,
//By using this way we don't have to pass all the values at once but define property to object as they are Required.


// Implementing Above Approach with new Design Approach.


class User {
    constructor(name){
        this.name = name;
    }
}
class userBuilder {
    constructor(name){
        this.user = new User(name);
    }
    setAge(age){
        this.user.age = age;
        return this;
    }
    setStreet(street){
        this.user.street = street;
        return this
    }
    setJob(job){
        this.user.job = job;
        return this;
    }
}

// console.log(new userBuilder("User3").setAge(45).setJob("Doctor"));

const User1 = new userBuilder("User1").setAge(89).setStreet("XXXX").setJob("HELPER");

// console.log(User1);

const newObj2 = new userBuilder("User1").setAge(89);
Object.freeze(newObj2);
//newObj2 cannot be modified now.
newObj2["uuuu"] = "Can be";
console.log(newObj2);
